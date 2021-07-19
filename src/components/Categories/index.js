// == Import npm
import React from 'react';
import { Button, Card } from 'semantic-ui-react';
import Categorie from 'src/components/Categories/Categorie';


// == Import
import './styles.scss';

// == Composant
const Categories = () => (
  <div className="categories">
    <h1 className="title">
      #Accueil
    </h1>
    <Button>
      Voir la catégorie sélectionnée 
    </Button>
    <Card.Group itemsPerRow={2}>
      <Categorie />
      <Categorie />
      <Categorie />
      <Categorie />
    </Card.Group>
  </div>
);

// == Export
export default Categories;
