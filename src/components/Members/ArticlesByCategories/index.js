// == Import npm
import React from 'react';
import { Card, Segment, Container, Icon, Loader} from 'semantic-ui-react';
import Article from './Article';

// == Import
import './styles.scss';

// == Composant
const ArticlesByCategories = ({ categorieSelected, categorieClicked, onBookmarkACategorie, setUserBookmarksArticles, isLoading, visible, scrollToTop }) => (
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
        { isLoading ? <Loader active size='big' inline='centered'/>  : 
          categorieSelected.map((card) => (
            <Article article={card} setUserBookmarksArticles={setUserBookmarksArticles} />
          ))
        }
      </Card.Group>
      <Icon
      className='scroll-up-button'
      name='arrow circle up'
      size='huge'
      style={{display: visible ? 'inline-block' : 'none'}}
      onClick={scrollToTop}
      color='teal'
      />
    </Segment>
  </Container>
);

// == Export
export default ArticlesByCategories;
