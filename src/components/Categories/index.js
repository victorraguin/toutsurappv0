// == Import npm
import React from 'react';
import { Card, Segment, Container } from 'semantic-ui-react';
import Categorie from 'src/components/Categories/Categorie';

// == Import
import './styles.scss';

// == Composant
const Categories = ({ list }) => (
  <Container>
    <Segment vertical>
      <h1 className="title">
        #Accueil
      </h1>
    </Segment>

    <Segment vertical color="teal">
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
