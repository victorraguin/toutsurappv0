// == Import npm
import React, { useState, useEffect } from 'react';
import { Segment } from 'semantic-ui-react';
import {
  Route, Switch, Link, withRouter,
} from 'react-router-dom';
import axios from 'axios';

// == Import components & styles
import './styles.scss';
import Header from 'src/components/Header';

// == Import users components
import Connection from 'src/components/Users/Connection';
import Categories from 'src/components/Users/Categories';
import CategoriesMember from 'src/components/Members/CategoriesMember';
import Articles from 'src/components/Users/Articles';
import ArticlesMember from 'src/components/Members/Articles';
import ArticlesByCategories from 'src/components/Members/ArticlesByCategories';
import Favoris from 'src/components/Members/Favoris';
import SignUpForm from '../Users/SignUpForm';
import Blog from '../Members/Blog';

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
  const [userBookmarksCategories, setUserBookmarksCategories] = useState([]);
  const [userBookmarksArticles, setUserBookmarksArticles] = useState([]);
  const [categorieClicked, setCategorieClicked] = useState('');

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

  const bookmarkACategorie = async (categorie) => {
    try {
      const dataFetched = await axios({
        method: 'put',
        url: `https://toutsur-app-gachimaster.herokuapp.com/categories/${categorie}`,
      });
      if (dataFetched.data.length === 0) {
        setUserBookmarksCategories(null);
      }
      setUserBookmarksCategories(dataFetched.data);
    }
    catch (error) {
      console.log(error.message);
    }
  };

  const onBookmarkACategorie = (data) => {
    console.log(categorieClicked);
    bookmarkACategorie(categorieClicked);
  };

  const onInputLogUserChange = (name, value) => {
    setUserLog({
      ...userLog,
      [name]: value,
    });
  };
  // == Fonction pour récupérer les articles sur l'API RSS
  const onClickCategoriePage = async (categorie) => {
    try {
      if (categorie === 'Musique') {
        const dataFetched = await axios({
          method: 'get',
          url: 'https://toutsur-app-gachimaster.herokuapp.com/API/articles/music',
        });
        console.log('Data fetch', dataFetched);
        setCategorieSelected([]);
        setCategorieSelected(dataFetched.data);
      }
      else if (categorie === 'Jeux vidéos') {
        const dataFetched = await axios({
          method: 'get',
          url: 'https://toutsur-app-gachimaster.herokuapp.com/API/articles/gaming',
        });
        console.log('Data fetch', dataFetched);
        setCategorieSelected([]);
        setCategorieSelected(dataFetched.data);
      }
      else if (categorie === 'Sport') {
        const dataFetched = await axios({
          method: 'get',
          url: 'https://toutsur-app-gachimaster.herokuapp.com/API/articles/sports',
        });
        console.log('Data fetch', dataFetched);
        setCategorieSelected([]);
        setCategorieSelected(dataFetched.data);
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
      console.log(userLogged);
      // == Si tout est ok :
      // == On récupère le token JWT envoyé par l'API, on le stock dans le header de axios,
      // == Puis on le stock dans le localStorage en cas de rechargement de la page.
      axios.defaults.baseURL = 'https://toutsur-app-gachimaster.herokuapp.com';
      axios.defaults.headers.common.Authorization = ` bearer ${userLogged.data.token} `;
      localStorage.setItem('token', userLogged.data.token);
      setUserLog({
        ...userLog,
        id: userLogged.data.id,
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
  // == Fonction de logOut
  const logOutUser = () => {
    localStorage.clear();
    setUserLog({
      ...userLog,
      email: '',
      password: '',
      error: false,
      logged: false,
      databaseError: false,
    });
  };
  const onCategorieSelected = (event) => {
    const clicked = event.target.closest('a');

    console.log(clicked.name);
    onClickCategoriePage(clicked.name);
    setCategorieClicked(clicked.name);
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

  const onClickBookMarkPage = async () => {
    try {
      const dataCategoriesFetched = await axios({
        method: 'post',
        url: 'https://toutsur-app-gachimaster.herokuapp.com/favorites/categories',
      });
      console.log(dataCategoriesFetched);
      if (dataCategoriesFetched.data.length === 0) {
        setUserBookmarksCategories(null);
      }
      else {
        setUserBookmarksCategories(dataCategoriesFetched.data);
      }
      const dataArticlesFetched = await axios({
        method: 'post',
        url: 'https://toutsur-app-gachimaster.herokuapp.com/favorites/articles',
      });
      console.log(dataArticlesFetched.data);
      if (dataArticlesFetched.data.length === 0) {
        setUserBookmarksArticles(null);
      }
      else {
        setUserBookmarksArticles(dataArticlesFetched.data);
      }
    }
    catch (error) {
      console.log(error.message);
    }
  };

  const onClickHomeMemberPage = async () => {

  };

  // == useEffect
  // == Appel à la BDD
  useEffect(async () => {
    const tokeninLocalStorage = localStorage.getItem('token');
    if (tokeninLocalStorage) {
      axios.defaults.baseURL = 'https://toutsur-app-gachimaster.herokuapp.com';
      axios.defaults.headers.common.Authorization = ` bearer ${tokeninLocalStorage} `;
      setUserLog({
        ...userLog,
        email: '',
        password: '',
        error: false,
        logged: true,
        databaseError: false,
      });
      try {
        const dataCategoriesFetched = await axios({
          method: 'post',
          url: 'https://toutsur-app-gachimaster.herokuapp.com/favorites/categories',
        });
        console.log(dataCategoriesFetched);
        console.log(userBookmarksCategories);
        if (dataCategoriesFetched.data.length === 0) {
          setUserBookmarksCategories(null);
        }
        else {
          setUserBookmarksCategories(dataCategoriesFetched.data);
        }
        const dataArticlesFetched = await axios({
          method: 'post',
          url: 'https://toutsur-app-gachimaster.herokuapp.com/favorites/articles',
        });
        console.log(dataArticlesFetched.data);
        if (dataArticlesFetched.data.length === 0) {
          setUserBookmarksArticles(null);
        }
        else {
          setUserBookmarksArticles(dataArticlesFetched.data);
        }
      }
      catch (error) {
        console.log(error.message);
      }
    }
    try {
      const dataFetched = await axios({
        method: 'get',
        url: 'https://toutsur-app-gachimaster.herokuapp.com/categories',
      });
      setCards(dataFetched.data);
    }
    catch (error) {
      console.log(error.message);
    }
  }, []);

  // == Vérification du state si utilisateur connecté

  // == Rendu de l'application
  return (
    <div className="toutSurApp">
      {/* Composant Header qui représente le menu sur toutes les pages */}
      <Header userLog={userLog} logOutUser={logOutUser} onClickBookMarkPage={onClickBookMarkPage} />

      {/* Début des routes */}
      {/* Composant Switch & Route qui permet de définir les routes pour nos composants */}
      <Switch>

        {/* Page d'accueil non connecté (lgiiste les catégories) */}
        <Route path="/" exact>
          { userLog.logged
            ? <ArticlesMember list={cards} onClickHomeMemberPage={onClickHomeMemberPage} />
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
          { userLog.logged
            ? <ArticlesByCategories categorieSelected={categorieSelected}  categorieClicked={categorieClicked} onBookmarkACategorie={onBookmarkACategorie} />
            : <Articles categorieSelected={categorieSelected} />}
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
          <Favoris userBookmarksArticles={userBookmarksArticles} userBookmarksCategories={userBookmarksCategories} bookmarkACategorie={bookmarkACategorie} />
        </Route>

        {/* Route pour utilisateur connecté pour accéder à la fonction Blog du site */}
        <Route path="/blog" exact>
          <Blog />
        </Route>

        {/* Route pour utilisateur connecté pour accéder aux catégories du site */}

        <Route path="/categories" exact>
          { userLog.logged
            ? (
              <CategoriesMember
                list={cards}
                onCategorieSelected={onCategorieSelected}
                onBookmarkACategorie={onBookmarkACategorie}
                userBookmarksCategories={userBookmarksCategories}
              />
            )
            : <Categories list={cards} onCategorieSelected={onCategorieSelected} />}
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
          <iframe src="https://giphy.com/embed/TLIj98vlSKpNXnkrBK" width="480" height="480" frameBorder="0" allowFullScreen />
        </Route>

        {/* Fin de routes */}
      </Switch>
    </div>
  );
};

// == Export
export default withRouter(ToutSurApp);
