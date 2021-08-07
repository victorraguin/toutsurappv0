// == Import npm
import React from 'react';
import {
  Card, Segment, Container, Icon, Loader,
} from 'semantic-ui-react';
import { motion } from 'framer-motion';
import Article from './Article';

// == Import
import './styles.scss';

// == Composant
const ArticlesByCategories = ({
  categorieSelected, categorieClicked, onBookmarkACategorie, setUserBookmarksArticles, isLoading, visible, scrollToTop,
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <Container>
      <Segment vertical>
        <h1 className="title">
          #{categorieClicked}
        </h1>
      </Segment>

      <Segment vertical color="teal">
        Vous êtes dans la catégorie #{categorieClicked}. Bonne lecture!
        <Segment vertical />
        <Card.Group className="card-group">
          { isLoading ? <Loader active size="big" inline="centered" />
            : categorieSelected.map((card) => (
              <Article article={card} setUserBookmarksArticles={setUserBookmarksArticles} />
            ))}
        </Card.Group>
        <Icon
          className="scroll-up-button"
          name="arrow circle up"
          size="huge"
          style={{ display: visible ? 'inline' : 'none' }}
          onClick={scrollToTop}
          color="teal"
        />
      </Segment>
    </Container>
  </motion.div>
);

// == Export
export default ArticlesByCategories;
