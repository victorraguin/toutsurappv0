// == Import npm
import React from 'react';
import { Card, Segment } from 'semantic-ui-react';
import Categorie from 'src/components/Categories/Categorie';

// == Import
import './styles.scss';

// == Composant
const Categories = ({ list }) => (
  <div className="categories">

    <Segment vertical>
      <h1 className="title">
        #Accueil
      </h1>
    </Segment>

    <Segment color="grey">
      <Card.Group className="card-group">
        {
        list.map((card) => (
          <Categorie categorie={card} />
        ))
      }
      </Card.Group>
    </Segment>
  </div>
);

// == Export
export default Categories;
