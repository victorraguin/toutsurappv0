// == Import npm
import React, { useState, useEffect } from 'react';
import { Segment } from 'semantic-ui-react';
import { Route, Switch, Link } from 'react-router-dom';

import axios from 'axios';

// == Import components & styles
import './styles.scss';
import Header from 'src/components/Header';
import Connection from 'src/components/Connection';
import Categories from 'src/components/Categories';
import Articles from 'src/components/Articles';
import SignUp from 'src/components/SignUp';





// == Application toutSur.App == //

const ToutSurApp = () => {

// == Data par défault
  const initialFormUserData = ({
    email: '',
    password: '',
  });



  // == State de l'application
  const [cards, setCards] = useState([]);
  const [userLog, setUserLog] = useState(initialFormUserData);



  // == Fonctions de l'application
    // == Fonction qui permet d'enregistrer les informations
    // == de connexion que tape mon utilisateur, dans le state approprié
  const onInputLogUserChange = (name, value) => {
    setUserLog({
      ...userLog,
      [name]: value,
    });
  };

    // == Fonction qui permet d'envoyer la requête de connection à l'API
  const handleSubmitLogin = (e) => {
    e.preventDefault();
    console.log('Coucou je voudrais faire une requête à lapi avec en params', userLog);
    setUserLog({
      email: '',
      password: '',
    });
  };



  // == useEffect
  // == Appel à une API BACK
  useEffect(async () => {
    try {
      const dataFetched = await axios({
        method: 'get',
        url: 'https://toutsur-app-gachimaster.herokuapp.com/categories',
      });
      console.log(dataFetched);
      setCards(dataFetched.data);
    }
    catch (error) {
      console.log(error.message);
    }
  }, []);



  // == Rendu de l'application
  return (
    <div className="toutSurApp">
      {/* Composant Header qui représente le menu sur toutes les pages */}
      <Header />

      {/* Début des routes */}
      {/* Composant Switch & Route qui permet de définir les routes pour nos composants */}
      <Switch>

        {/* Page d'accueil non connecté (liste les catégories) */}
        <Route path="/" exact>
          <Categories list={cards} />
        </Route>

        {/* Page de connection */}
        <Route path="/connection" exact>
          <Connection
            onInputLogUserChange={onInputLogUserChange}
            handleSubmitLogin={handleSubmitLogin}
            userLog={userLog}
          />
        </Route>

        {/* Page des articles pour un utilisateur non connecté */}
        <Route path="/articles" exact>
          <Articles />
        </Route>

        {/* Page d'inscription */}
        <Route path="/inscription" exact>
          <SignUp />
        </Route>

        {/* Enfin, dernière route représententant la page 404 (erreur) */}
        <Route>
          <Link
            to="/"
          >
            <Segment vertical>
              <h2>
                #Retour sur l'Accueil
              </h2>
            </Segment>
          </Link>
          <iframe src="https://giphy.com/embed/TLIj98vlSKpNXnkrBK" width="480" height="480" frameBorder="0" className="giphy-embed" allowFullScreen />
        </Route>

        {/* Fin de routes */}
      </Switch>
    </div>
  );
};

// == Export
export default ToutSurApp;
