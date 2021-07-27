// == Import npm
import React from 'react';
import { Card, Segment, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Article from './Article';

// == Import
import './styles.scss';

// == Composant
const ArticlesMember = ({ props }) => (
  <Container>
    <Segment vertical>
      <h1 className="title">
        #Accueil
      </h1>
    </Segment>

    <Segment vertical color="teal">
    <Segment vertical>
        Bonjour !
      </Segment>
      <Card.Group className="card-group" centered>
        <h4>Vous n'avez pas encore de catégories favorites...</h4>
      </Card.Group>
    </Segment>
  </Container>
);

// == Export
export default ArticlesMember;
