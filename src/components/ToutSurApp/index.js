// == Import npm
import React, { useState, useEffect } from 'react';
import { Segment } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';

// == Import components & styles
import './styles.scss';
import Header from 'src/components/Header';
import Categories from 'src/components/Categories';
import Articles from 'src/components/Articles';
import SignUp from 'src/components/SignUp';

// Faux Data
const data = [
  {
    id: 1,
    title: 'Serendipity',
    image: 'https://cdn.pixabay.com/photo/2016/04/30/14/58/music-1363069_960_720.jpg',
    categorie: 'Musique',
    color: 'orange',

  },
  {
    id: 2,
    title: 'TitleBidon',
    image: 'https://cdn.pixabay.com/photo/2016/08/20/08/46/hiker-1607078_960_720.jpg',
    categorie: 'Voyages',
    color: 'olive',

  },
  {
    id: 3,
    title: 'DeuxiemeTitreBidon',
    image: 'https://cdn.pixabay.com/photo/2014/11/17/13/17/crossfit-534615_960_720.jpg',
    categorie: 'Sport',
    color: 'brown',

  },
];

// == Composant
const ToutSurApp = () => {
// == State de l'application
  const [cards, setCards] = useState(data);

  // == Fonctions de l'application

  // == useEffect
  /*  == Appel à une API BACK
  useEffect(async () => {
    try {
      const dataFetched = await axios({
        method: 'get',
        url: 'http://localhost:3000/categories',
      });
      console.log(dataFetched);
      setCards(dataFetched.data);
    }
    catch (error) {
      console.log(error.message);
    }
  }, []);
  */

  // == Rendu de l'application
  return (
    <div className="toutSurApp">

      <Header />
      <Switch>
        <Route path="/" exact>
          <Categories list={cards} />
        </Route>
        <Route path="/articles" exact>
          <Articles />
        </Route>
        <Route path="/inscription" exact>
          <SignUp />
        </Route>
        <Route>
          <a href="/">
            <Segment vertical>
              <h2>
                #Retour sur l'Accueil
              </h2>
            </Segment>
          </a>
          <iframe src="https://giphy.com/embed/TLIj98vlSKpNXnkrBK" width="480" height="480" frameBorder="0" className="giphy-embed" allowFullScreen />
        </Route>
      </Switch>
    </div>
  );
};

// == Export
export default ToutSurApp;
