// == Import npm
import React, { useState, useEffect } from 'react';
import Header from 'src/components/Header';
import Categories from 'src/components/Categories';
import SignUp from 'src/components/SignUp';
import axios from 'axios';


// == Import
import './styles.scss';

//Faux Data
const data = [
  {
    id: 1,
    title: 'Serendipity',
    image: 'https://react.semantic-ui.com/images/avatar/large/matthew.png',
    categorie: 'musique',

  },
  {
    id: 2,
    title: 'TitleBidon',
    image: 'https://https://stackoverflow.com/questions/45946592/responsive-semantic-ui-react-grid-columns-rows',
    categorie: 'voyages',

  },
  {
    id: 3,
    title: 'DeuxiemeTitreBidon',
    image: 'https://react.semantic-ui.com/images/avatar/large/matthew.png',
    categorie: 'sport',

  },
]


// == Composant
const ToutSurApp = () => {
  const [cards, setCards] = useState([]);
  // == useEffect

useEffect(async () => {
  try {
    const dataFetched = await axios({
      method: 'get',
      url: 'http://localhost:3000/categories'
    });
    console.log(dataFetched);
    setCards(dataFetched.data);
  }
  catch (error) {
    console.log(error.message);
  }
}, []);

  return(
    <div className="toutSurApp">
      <Header/>
      {/* <Categories list={cards}/> */}
      <SignUp/>
    </div>
  )
};

// == Export
export default ToutSurApp;
