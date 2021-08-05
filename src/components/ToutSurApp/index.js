// == Import npm
import React, { useState, useEffect, useLayoutEffect } from 'react';
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
  const [userBookmarksCategoriesPage, setUserBookmarksCategoriesPage] = useState([]);
  const [userBookmarksArticles, setUserBookmarksArticles] = useState([]);
  const [favoritesRSSFeed, setFavoritesRSSFeed] = useState([]);
  const [categorieClicked, setCategorieClicked] = useState('');
  const [filteredFavorites, setFilteredFavorites] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [visible, setVisible] = useState(false);

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

  const onBookmarkACategorie = (event) => {
    const clicked = event.target;
    bookmarkACategorie(clicked.name);
  };

  const onInputLogUserChange = (name, value) => {
    setUserLog({
      ...userLog,
      [name]: value,
    });
  };
  // == Fonction pour récupérer les articles sur l'API RSS
  const onClickCategoriePage = async (categorie) => {
    setIsLoading(true);
    try {
      if (categorie === 'Musique') {
        setCategorieSelected([]);
        const dataFetched = await axios({
          method: 'get',
          url: 'https://toutsur-app-gachimaster.herokuapp.com/API/articles/music',
        });
        setCategorieSelected(dataFetched.data);
      }
      else if (categorie === 'Jeux vidéos') {
        setCategorieSelected([]);
        const dataFetched = await axios({
          method: 'get',
          url: 'https://toutsur-app-gachimaster.herokuapp.com/API/articles/gaming',
        });
        setCategorieSelected(dataFetched.data);
      }
      else if (categorie === 'Sport') {
        setCategorieSelected([]);
        const dataFetched = await axios({
          method: 'get',
          url: 'https://toutsur-app-gachimaster.herokuapp.com/API/articles/sports',
        });
        setCategorieSelected(dataFetched.data);
      }
      else if (categorie === 'Science') {
        setCategorieSelected([]);
        const dataFetched = await axios({
          method: 'get',
          url: 'https://toutsur-app-gachimaster.herokuapp.com/API/articles/sciences',
        });
        setCategorieSelected(dataFetched.data);
      }
      else if (categorie === 'Art') {
        setCategorieSelected([]);
        const dataFetched = await axios({
          method: 'get',
          url: 'https://toutsur-app-gachimaster.herokuapp.com/API/articles/art',
        });
        setCategorieSelected(dataFetched.data);
      }
      else if (categorie === 'Voyage') {
        setCategorieSelected([]);
        const dataFetched = await axios({
          method: 'get',
          url: 'https://toutsur-app-gachimaster.herokuapp.com/API/articles/travel',
        });
        console.log(dataFetched.data);
        setCategorieSelected(dataFetched.data);
      }
      else if (categorie === 'Technologie') {
        setCategorieSelected([]);
        const dataFetched = await axios({
          method: 'get',
          url: 'https://toutsur-app-gachimaster.herokuapp.com/API/articles/technology',
        });
        setCategorieSelected(dataFetched.data);
      }
      else if (categorie === 'Mode') {
        setCategorieSelected([]);
        const dataFetched = await axios({
          method: 'get',
          url: 'https://toutsur-app-gachimaster.herokuapp.com/API/articles/fashion',
        });
        setCategorieSelected(dataFetched.data);
      }
      else if (categorie === 'Actualités') {
        setCategorieSelected([]);
        const dataFetched = await axios({
          method: 'get',
          url: 'https://toutsur-app-gachimaster.herokuapp.com/API/articles/news',
        });
        setCategorieSelected(dataFetched.data);
      }
      else if (categorie === 'Cinema') {
        setCategorieSelected([]);
        const dataFetched = await axios({
          method: 'get',
          url: 'https://toutsur-app-gachimaster.herokuapp.com/API/articles/cinema',
        });
        setCategorieSelected(dataFetched.data);
      }
    }
    catch (error) {
      console.log(error.message);
    }
    finally {
      setIsLoading(false);
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
    setFavoritesRSSFeed([]);
  };

  const onCategorieSelected = (event) => {
    const clicked = event.target.closest('a');
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
    if (userSignUp.error) {
      setUserSignUp({
        ...userSignUp,
        error :  false
      })
    }
    if (userSignUp.databaseError) {
      setUserSignUp({
        ...userSignUp,
        databaseError :  false
      })
    }
  };
  const handleInputSubmit = (evt) => {
    evt.preventDefault();
    // je check le form au submit
    validateForm();
  };
  // Fonction pour valider le form
  const validateForm = () => {
    // je veux verifier que password === confirmPassword
    if (userSignUp.password !== userSignUp.confirmPassword) {
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
    else if (((userSignUp.password.length < 8) || (userSignUp.confirmPassword.length < 8))
    && (userSignUp.password !== userSignUp.confirmPassword)) {
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
      if (dataCategoriesFetched.data.length === 0) {
        setUserBookmarksCategoriesPage(null);
      }
      else {
        setUserBookmarksCategoriesPage(dataCategoriesFetched.data);
      }
      const dataArticlesFetched = await axios({
        method: 'post',
        url: 'https://toutsur-app-gachimaster.herokuapp.com/favorites/articles',
      });
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
  // == Fonction pour chercher les articles selon les categories favoris  d'un utilisateur connecter
  const onClickHomeMemberPage = async () => {
    let favoritesArticles = [];
    setFavoritesRSSFeed([]);
    setIsLoading(true);
    // loading installer un loader ou uselayouteffect a tester!!
    // appeler le fetch a optimiser
    try {
      // Si l'utilisateur est connecter, je vais chercher ses favoris dans la bdd
      if (userLog.logged) {
        const dataFavoriteCategoriesFetched = await axios({
          method: 'post',
          url: 'https://toutsur-app-gachimaster.herokuapp.com/favorites/categories',
        });
        dataFavoriteCategoriesFetched.data.forEach(async (data) => {
          if (data.name === 'Sport') {
            const dataFetchedSport = await axios({
              method: 'get',
              url: 'https://toutsur-app-gachimaster.herokuapp.com/API/articles/sports',
            });
            favoritesArticles = [...favoritesArticles, ...dataFetchedSport.data];
            setFavoritesRSSFeed([...favoritesArticles]);
          }
          if (data.name === 'Jeux vidéos') {
            const dataFetchedGaming = await axios({
              method: 'get',
              url: 'https://toutsur-app-gachimaster.herokuapp.com/API/articles/gaming',
            });
            favoritesArticles = [...favoritesArticles, ...dataFetchedGaming.data];
            setFavoritesRSSFeed([...favoritesArticles]);
          }
          if (data.name === 'Musique') {
            const dataFetchedMusic = await axios({
              method: 'get',
              url: 'https://toutsur-app-gachimaster.herokuapp.com/API/articles/music',
            });
            favoritesArticles = [...favoritesArticles, ...dataFetchedMusic.data];
            setFavoritesRSSFeed([...favoritesArticles]);
          }

          if (data.name === 'Art') {
            const dataFetchedArt = await axios({
              method: 'get',
              url: 'https://toutsur-app-gachimaster.herokuapp.com/API/articles/art',
            });
            favoritesArticles = [...favoritesArticles, ...dataFetchedArt.data];
            setFavoritesRSSFeed([...favoritesArticles]);
          }

          if (data.name === 'Sciences') {
            const dataFetchedSciences = await axios({
              method: 'get',
              url: 'https://toutsur-app-gachimaster.herokuapp.com/API/articles/sciences',
            });
            favoritesArticles = [...favoritesArticles, ...dataFetchedSciences.data];
            setFavoritesRSSFeed([...favoritesArticles]);
          }
          if (data.name === 'Voyage') {
            const dataFetchedTravel = await axios({
              method: 'get',
              url: 'https://toutsur-app-gachimaster.herokuapp.com/API/articles/travel',
            });
            favoritesArticles = [...favoritesArticles, ...dataFetchedTravel.data];
            setFavoritesRSSFeed([...favoritesArticles]);
          }
          if (data.name === 'Technologie') {
            const dataFetchedTechno = await axios({
              method: 'get',
              url: 'https://toutsur-app-gachimaster.herokuapp.com/API/articles/technology',
            });
            favoritesArticles = [...favoritesArticles, ...dataFetchedTechno.data];
            setFavoritesRSSFeed([...favoritesArticles]);
          }
          if (data.name === 'Mode') {
            const dataFetchedMode = await axios({
              method: 'get',
              url: 'https://toutsur-app-gachimaster.herokuapp.com/API/articles/fashion',
            });
            favoritesArticles = [...favoritesArticles, ...dataFetchedMode.data];
            setFavoritesRSSFeed([...favoritesArticles]);
          }
          if (data.name === 'Actualités') {
            const dataFetchedActu = await axios({
              method: 'get',
              url: 'https://toutsur-app-gachimaster.herokuapp.com/API/articles/news',
            });
            favoritesArticles = [...favoritesArticles, ...dataFetchedActu.data];
            setFavoritesRSSFeed([...favoritesArticles]);
          }
          if (data.name === 'Cinema') {
            const dataFetchedCinema = await axios({
              method: 'get',
              url: 'https://toutsur-app-gachimaster.herokuapp.com/API/articles/cinema',
            });
            favoritesArticles = [...favoritesArticles, ...dataFetchedCinema.data];
            setFavoritesRSSFeed([...favoritesArticles]);
          }
        });
      }
    }
    catch (error) {
      console.log(error.message);
    }
    finally {
      setIsLoading(false);
    }
  };

  // Fonction pour supprimer une categories des favoris
  const onDeleteClick = async (evt) => {
    const categorieToDelete = evt.target.name;
    try {
      const dataAfterDelete = await axios({
        method: 'delete',
        url: `https://toutsur-app-gachimaster.herokuapp.com/categories/${categorieToDelete}`,
      });
      console.log('Les catégories après delete:', dataAfterDelete);
      if (dataAfterDelete.data.length === 0) {
        console.log('on passe a null');
        setUserBookmarksCategoriesPage(null);
        setUserBookmarksCategories(null);
      }
      else {
        setUserBookmarksCategories(dataAfterDelete.data);
        setUserBookmarksCategoriesPage(dataAfterDelete.data);
      }
    }
    catch (error) {
      console.log(error.message);
    }
  };

  // Fonction pour montrer bouton-scroll-to-top
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    }
    else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  // Fonction pour utiliser bouton-scroll-to-top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisible);

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
        if (dataCategoriesFetched.data.length === 0) {
          setUserBookmarksCategories(null);
        }
        else {
          setUserBookmarksCategories(dataCategoriesFetched.data);
          console.log(dataCategoriesFetched.data);
          setUserBookmarksCategoriesPage(dataCategoriesFetched.data);
        }
        const dataArticlesFetched = await axios({
          method: 'post',
          url: 'https://toutsur-app-gachimaster.herokuapp.com/favorites/articles',
        });
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
      console.log('Catégories de notre site web:', dataFetched.data)
      setCards(dataFetched.data);
    }
    catch (error) {
      console.log(error.message);
    }
  }, []);

  useEffect(() => {
    // je compare les dates de creation des articles pour avoir les plus recentes en premier
    const filteredFavoritesArticles = favoritesRSSFeed.sort((a, b) => b.created - a.created);
    if (filteredFavoritesArticles.length === 0) {
      setFilteredFavorites(null);
    }
    else {
      setFilteredFavorites(filteredFavoritesArticles);
    }
  }, [favoritesRSSFeed]);

  useLayoutEffect(() => {
    onClickHomeMemberPage();
  }, [userLog.logged, userBookmarksCategories]);

  // == Rendu de l'application
  return (
    <div className="toutSurApp">
      {/* Composant Header qui représente le menu sur toutes les pages */}
      <Header
        userLog={userLog}
        logOutUser={logOutUser}
        onClickBookMarkPage={onClickBookMarkPage}
        setUserLog={setUserLog}
        setUserSignUp={setUserSignUp}
        userSignUp={userSignUp}
      />

      {/* Début des routes */}
      {/* Composant Switch & Route qui permet de définir les routes pour nos composants */}
      <Switch>

        {/* Page d'accueil non connecté (liste les catégories) */}
        <Route path="/" exact>
          { userLog.logged
            ? (
              <ArticlesMember
                articles={filteredFavorites}
                setUserBookmarksArticles={setUserBookmarksArticles}
                isLoading={isLoading}
                visible={visible}
                scrollToTop={scrollToTop}
              />
            )
            : (
              <Categories
                list={cards}
                onCategorieSelected={onCategorieSelected}
                visible={visible}
                scrollToTop={scrollToTop}
              />
            )}
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
            ? (
              <ArticlesByCategories
                categorieSelected={categorieSelected}
                categorieClicked={categorieClicked}
                setUserBookmarksArticles={setUserBookmarksArticles}
                isLoading={isLoading}
                visible={visible}
                scrollToTop={scrollToTop}
              />
            )
            : (
              <Articles
                categorieSelected={categorieSelected}
                isLoading={isLoading}
                visible={visible}
                scrollToTop={scrollToTop}
              />
            )}
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
          <Favoris
            userBookmarksArticles={userBookmarksArticles}
            userBookmarksCategoriesPage={userBookmarksCategoriesPage}
            onDeleteClick={onDeleteClick}
            setUserBookmarksArticles={setUserBookmarksArticles}
            onCategorieSelected={onCategorieSelected}
          />
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
                isLoading={isLoading}
                userBookmarksCategoriesPage={userBookmarksCategoriesPage}
                cards={cards}
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
