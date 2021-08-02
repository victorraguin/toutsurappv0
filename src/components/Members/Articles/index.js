// == Import npm
import React from 'react';
import { Card, Segment, Container, Loader } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Article from './Article';

// == Import
import './styles.scss';

// == Composant
const ArticlesMember = ({ articles, setUserBookmarksArticles, isLoading}) => (
  <Container>
    <Segment vertical>
      <h1 className="title">
        #Accueil
      </h1>
    </Segment>

    <Segment vertical color="teal">
      Bonjour
      <Segment vertical />
      <Card.Group className="card-group" centered>
        { articles ? 
        isLoading ? <Loader active size='big' inline='centered'/> 
        :
          articles.map((article) => (
            <Article article={article} setUserBookmarksArticles={setUserBookmarksArticles} />
          )) : <h4>Vous n'avez pas encore enregistré de catégories dans vos favoris ! N'oubliez pas de personnaliser votre feed</h4>
    }
      </Card.Group>
    </Segment>
  </Container>
);

// == Export
export default ArticlesMember;
