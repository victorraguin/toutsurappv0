// == Import npm
import React, { useState } from 'react';
import Header from 'src/components/Header';
import Categories from 'src/components/Categories';


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
  const [cards, setCards] = useState(data);

  return(
    <div className="toutSurApp">
      <Header/>
      <Categories list={cards}/> 
    </div>
  )
};

// == Export
export default ToutSurApp;
