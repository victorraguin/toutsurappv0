// == Import npm
import React from 'react';
import { Card, Segment, Container, Button} from 'semantic-ui-react';
import Article from './Article';

// == Import
import './styles.scss';

// == Composant
const ArticlesByCategories = ({ categorieSelected, categorieClicked, onBookmarkACategorie }) => (
  <Container>
    <Segment vertical>
      <h1 className="title">
        #{categorieClicked}
      </h1>
    </Segment>

    <Segment vertical color="teal">
      <Segment vertical>
        Hello !
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
