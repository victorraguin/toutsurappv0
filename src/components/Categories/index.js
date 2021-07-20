// == Import npm
import React from 'react';
import { Button, Card } from 'semantic-ui-react';
import Categorie from 'src/components/Categories/Categorie';


// == Import
import './styles.scss';

// == Composant
const Categories = ({list}) => (
  <div className="categories">
    {console.log(list)}
    <h1 className="title">
      #Accueil
    </h1>
    <Button className="button">
      Voir la catégorie sélectionnée 
    </Button>
    <Card.Group className= "card-group" itemsPerRow={5}>
      {
        list.map((card) => (
          <Categorie categorie={card}/>
        ))
      } 
    </Card.Group>
  </div>
);

// == Export
export default Categories;
