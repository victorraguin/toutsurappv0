// == Import npm
import React from 'react';
import { Card, Segment, Container } from 'semantic-ui-react';
import Card from './ComposantACopier';

// == Import
import './styles.scss';

// == Composant
const ComposantACopier = ({ props }) => (
  <Container>
    <Segment vertical>
      <h1 className="title">
        #Titre de la page
      </h1>
    </Segment>

    <Segment vertical color="teal">
      <Card.Group className="card-group">
        {
        props.map((card) => (
          <Cards key={card.id} categorie={card} />
        ))
          }
      </Card.Group>
    </Segment>
  </Container>
);

// == Export
export default ComposantACopier;
