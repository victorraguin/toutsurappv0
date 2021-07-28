// == Import npm
import React from 'react';
import { Card, Segment, Container } from 'semantic-ui-react';
import Article from './Article';

// == Import
import './styles.scss';

// == Composant
const ArticlesByCategories = ({ categorieSelected }) => (
  <Container>
    <Segment vertical>
      <h1 className="title">
        #Articles
      </h1>
    </Segment>

    <Segment vertical color="teal">
      <Segment vertical>
        N'hésitez pas à enregistrer vos articles pour plus tard !
      </Segment>
      <Card.Group className="card-group">
        {
          categorieSelected.map((card) => (
            <Article article={card} />
          ))
        }
      </Card.Group>
    </Segment>
  </Container>
);

// == Export
export default ArticlesByCategories;
