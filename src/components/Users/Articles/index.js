// == Import npm
import React from 'react';
import { Card, Segment, Container } from 'semantic-ui-react';
import Article from './Article';

// == Import
import './styles.scss';

// == Composant
const Articles = ({ categorieSelected }) => (
  <Container>
    <Segment vertical>
      <h1 className="title">
        #Articles
      </h1>
    </Segment>

    <Segment vertical color="teal">
      <Card.Group className="card-group">
        {
        categorieSelected.map((card) => (
          <Article key={card.id} article={card} />
        ))
          }
      </Card.Group>
    </Segment>
  </Container>
);

// == Export
export default Articles;
