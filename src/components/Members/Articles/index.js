// == Import npm
import React from 'react';
import { Card, Segment, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Article from './Article';

// == Import
import './styles.scss';

// == Composant
const ArticlesMember = ({ articles, setUserBookmarksArticles }) => (
  <Container>
    <Segment vertical>
      <h1 className="title">
        #Accueil
      </h1>
    </Segment>

    <Segment vertical color="teal">
      <Segment vertical />
      <Card.Group className="card-group" centered>
        {
          articles.map((article) => (
            <Article article={article} setUserBookmarksArticles={setUserBookmarksArticles} />
          ))
    }
      </Card.Group>
    </Segment>
  </Container>
);

// == Export
export default ArticlesMember;
