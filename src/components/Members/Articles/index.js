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
        Ci-dessous, une liste de vos articles favoris. Mais n'oubliez pas, vous pouvez <Link to="/favoris"> gérer vos catégories préférées !</Link>
      </Segment>
      <Card.Group className="card-group">
        <Article />
        <Article />
        <Article />
        <Article />
      </Card.Group>
    </Segment>
  </Container>
);

// == Export
export default ArticlesMember;
