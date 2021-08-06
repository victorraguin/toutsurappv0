// == Import npm
import React from 'react';
import {
  Card, Segment, Container, Loader, Icon, Button,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Article from './Article';

// == Import
import './styles.scss';

// == Composant
const ArticlesMember = ({
  articles, setUserBookmarksArticles, isLoading, visible, scrollToTop,
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <Container>
      <Segment vertical>
        <h1 className="title">
          #Accueil
        </h1>
      </Segment>

      <Segment vertical color="teal">
        <Segment vertical>
          <h3>Bonne lecture sur toutSur.app !</h3>
        </Segment>
        <Card.Group className="card-group">
          {/* <Grid columns={5} doubling relaxed> */}
          { articles
            ? isLoading ? <Loader active size="big" inline="centered" />
              : articles.map((article) => (
                <Article article={article} setUserBookmarksArticles={setUserBookmarksArticles} />
              )) : (
                <div className="flex">
                  <h4 className="h4center">Vous n'avez pas encore enregistré de catégories dans vos favoris.</h4>
                  <div className="button-accueil">
                    <Link to="/categories">
                      <Button style={{ backgroundColor: '#3282b841', color: '#2B2B2B' }} className="button-feed" circular size="medium" content="Personnaliser mon feed" icon="right arrow" labelPosition="right" />
                    </Link>
                  </div>
                </div>
            )}
          {/* </Grid> */}
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
export default ArticlesMember;
