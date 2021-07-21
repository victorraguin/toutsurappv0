// == Import npm
import React from 'react';
import { Card, Segment, Container } from 'semantic-ui-react';
import Categorie from 'src/components/Categories/Categorie';

// == Import
import './styles.scss';

// == Composant
const Categories = ({ list }) => (
  <Container>
    <Segment vertical className="categories">
      <h1 className="title">
        #Accueil
      </h1>
    </Segment>

    <Segment color="grey">
      <Card.Group className="card-group">
        {
        list.map((card) => (
          <Categorie key={card.id} categorie={card} />
        ))
          }
      </Card.Group>
    </Segment>
  </Container>
);

// == Export
export default Categories;
