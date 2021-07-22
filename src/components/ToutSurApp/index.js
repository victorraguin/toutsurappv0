// == Import npm
import React, { useState, useEffect } from 'react';
import { Label, Segment } from 'semantic-ui-react';
import { Route, Switch, Link } from 'react-router-dom';

import axios from 'axios';

// == Import components & styles
import './styles.scss';
import Header from 'src/components/Header';
import Connection from 'src/components/Connection';
import Categories from 'src/components/Categories';
import Articles from 'src/components/Articles';
import SignUpForm from '../SignUpForm';

// == Data par default
const initialFormUserData = ({
  email: '',
  password: '',
});

const initialFormSignUpData = ({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
});

// == Composant
const ToutSurApp = () => {
// == State de l'application
  const [cards, setCards] = useState([]);
  const [userLog, setUserLog] = useState(initialFormUserData);
  const [userSignUp, setUserSignUp] = useState(initialFormSignUpData);
  const [categorieSelected, setCategorieSelected] = useState([]);

  // == Fonctions de l'application
  const onInputLogUserChange = (name, value) => {
    setUserLog({
      ...userLog,
      [name]: value,
    });
  };


  const onClickCategoriePage = async () => {
    try {
      const dataFetched = await axios({
        method: 'get',
        url: 'https://toutsur-app-gachimaster.herokuapp.com/articles',
      });
      console.log(dataFetched.data);
      if (dataFetched) {
        setCategorieSelected(dataFetched.data);
      }
    }
    catch (error) {
      console.log(error.message);
    }
  };

  const onCategorieSelected = (event) => {
    const clicked = event.target.closest('a');
    console.log('Je voudrais afficher la catégorie', clicked.name);
    onClickCategoriePage(clicked);
  };

  const onFormSignUp = (name, value) => {
    setUserSignUp({
      ...userSignUp,
      [name]: value,
    });
  };

  const handleInputChange = (evt) => {
    // Je récupère le nom de l'input qui a changé
    // et sa value (son contenu)
    const { name, value } = evt.target;
    console.log(name, value);
    setUserSignUp(name, value);
    onFormSignUp(name, value);
  };

  const handleInputSubmit = (evt) => {
    evt.preventDefault();
    console.log('click submit', userSignUp);
    // je veux que password et confirm password soit equivalent !!!????
    // je recupere les mots de passes du state
    const { password, confirmPassword } = userSignUp;
    if (password !== confirmPassword) {
      <Label basic color="red" pointing="left">
        Your passwords don't match
      </Label>;
    }
    else {
      // make API call
    }
    // quand je reset le form le state disparait?
    setUserSignUp({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
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
          <Categories list={cards} onCategorieSelected={onCategorieSelected} />
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
          <Articles categorieSelected={categorieSelected} />
        </Route>

        {/* Page d'inscription */}
        <Route path="/inscription" exact>
          <SignUpForm
            userSignUp={userSignUp}
            handleInputChange={handleInputChange}
            handleInputSubmit={handleInputSubmit}
          />
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
