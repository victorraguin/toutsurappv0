// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card, Segment, Container, Icon,
} from 'semantic-ui-react';
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
      <Segment vertical>
        Pour enregistrer vos articles en favoris, pensez à<Link to="/inscription"> vous inscrire !</Link>
      </Segment>
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