// == Import npm
import React, { useState, useEffect } from 'react';
import { Segment } from 'semantic-ui-react';
import { Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';

// == Import components & styles
import './styles.scss';
import Header from 'src/components/Header';

// == Import users components
import Connection from 'src/components/Users/Connection';
import Categories from 'src/components/Users/Categories';
import Articles from 'src/components/Users/Articles';
import ArticlesMember from 'src/components/Members/Articles';
import SignUpForm from '../Users/SignUpForm';
import Favoris from 'src/components/Members/Favoris';

// == Import members components

// == Data par default
const initialFormLoginData = ({
  email: '',
  password: '',
  error: false,
  databaseError: false,
  logged: false,
});

const initialFormSignUpData = ({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  error: false,
  subscribed: false,
  databaseError: false,
});

// == Composant
const ToutSurApp = () => {
// == State de l'application
  const [cards, setCards] = useState([]);
  const [userLog, setUserLog] = useState(initialFormLoginData);

  const [userSignUp, setUserSignUp] = useState(initialFormSignUpData);
  const [categorieSelected, setCategorieSelected] = useState([]);

  // == Fonctions de l'application

  // == Fonction pour inscrire un utilisateur
  const postSubscribeUser = async () => {
    try {
      const userSubscribed = await axios({
        method: 'post',
        url: 'https://toutsur-app-gachimaster.herokuapp.com/signup',
        data: {
          name: userSignUp.name,
          email: userSignUp.email,
          password: userSignUp.password,
          passwordConfirm: userSignUp.confirmPassword,
        },
      });
      setUserSignUp({
        ...userSignUp,
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        error: false,
        subscribed: true,
      });
    }
    catch (error) {
      setUserSignUp({
        ...userSignUp,
        databaseError: true,
      });
    }
  };

  const onInputLogUserChange = (name, value) => {
    setUserLog({
      ...userLog,
      [name]: value,
    });
  };

  // == Fonction pour récupérer les articles sur l'API RSS
  const onClickCategoriePage = async () => {
    try {
      const dataFetched = await axios({
        method: 'get',
        url: 'https://toutsur-app-gachimaster.herokuapp.com/API/articles',
      });
      if (dataFetched) {
        setCategorieSelected(dataFetched.data.items);
      }
    }
    catch (error) {
      console.log(error.message);
    }
  };

  // == Envoi d'une requête à l'API BACK pour la connexion de notre utilisateur
  const postLoginUser = async () => {
    try {
      const userLogged = await axios({
        method: 'post',
        url: 'https://toutsur-app-gachimaster.herokuapp.com/login',
        data: {
          email: userLog.email,
          password: userLog.password,
        },
      });
      // == Si tout est ok :
      setUserLog({
        ...userLog,
        email: '',
        password: '',
        error: false,
        logged: true,
        databaseError: false,
      });
    }
    // == Si il y a une erreur :
    catch (error) {
      setUserLog({
        ...userLog,
        databaseError: true,
        error: false,
      });
    }
  };

  // == Fonction qui permet de vérifier les inputs de connexion
  const validateLoginForm = () => {
    if (!userLog.email.includes('@')) {
      setUserLog({
        ...userLog,
        password: '',
        error: true,
      });
    }
    else if ((userLog.password.length < 8)) {
      setUserLog({
        ...userLog,
        password: '',
        error: true,
      });
    }
    else {
      postLoginUser();
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
    setUserSignUp(name, value);
    onFormSignUp(name, value);
  };

  const handleInputSubmit = (evt) => {
    evt.preventDefault();
    // je check le form au submit
    validateForm();
  };

  // Fonction pour valider le form
  const validateForm = () => {
    // je veux verifier que password === confirmPassword
    if (userSignUp.password != userSignUp.confirmPassword) {
      setUserSignUp({
        ...userSignUp,
        password: '',
        confirmPassword: '',
        error: true,
      });
    }
    // email to be email shape, regex to be looked at !!!!
    else if (!userSignUp.email.includes('@')) {
      setUserSignUp({
        ...userSignUp,
        password: '',
        confirmPassword: '',
        error: true,
      });
    }
    // un minimum de huit caracters pour le mdp
    else if ((userSignUp.password.length < 8) || (userSignUp.confirmPassword.length < 8)
    && (userSignUp.password != userSignUp.confirmPassword)) {
      setUserSignUp({
        ...userSignUp,
        password: '',
        confirmPassword: '',
        error: true,
      });
    }
    else {
      postSubscribeUser();
    }
  };

  // == Fonction qui permet de vérifier les inputs de mon utilisateur et si tout est bon,
  // == d'envoyer une requête à l'API.
  const handleSubmitLogin = (e) => {
    e.preventDefault();
    validateLoginForm();
  };

  // == useEffect
  // == Appel à la BDD
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
      <Header userLog={userLog} />

      {/* Début des routes */}
      {/* Composant Switch & Route qui permet de définir les routes pour nos composants */}
      <Switch>

        {/* Page d'accueil non connecté (liste les catégories) */}
        <Route path="/" exact>
          { userLog.logged
            ? <ArticlesMember list={cards} />
            : <Categories list={cards} onCategorieSelected={onCategorieSelected} />}
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

          {/* Page des favoris pour un utilisateur  connecté */}
        <Route path="/favoris" exact>
          <Favoris />
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
