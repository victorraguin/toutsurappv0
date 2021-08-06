// == Import npm
import React from 'react';
import {
  Card, Segment, Container,
} from 'semantic-ui-react';
import { motion } from 'framer-motion';
import FavArticleCard from './FavArticleCard';
import FavCategorieCard from './FavCategorieCard';

// == Import
import './styles.scss';

// == Composant
const Favoris = ({
  userBookmarksArticles, userBookmarksCategoriesPage, onDeleteClick, setUserBookmarksArticles, onCategorieSelected,
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <Container>
      <Segment vertical>
        <h1 className="title">
          #Favoris
        </h1>
        <h3 className="title">
          #Mes catégories préférées
        </h3>
      </Segment>
      <Segment vertical color="teal">
        <Card.Group className="card-group" centered>
          { userBookmarksCategoriesPage ? userBookmarksCategoriesPage.map((categorie) => (
            <FavCategorieCard key={categorie.id} categorie={categorie} onDeleteClick={onDeleteClick} onCategorieSelected={onCategorieSelected} />
          )) : <h3>Vous n'avez pas encore enregistré de catégories</h3>}
        </Card.Group>
      </Segment>

      <Segment vertical>
        <h3 className="title">
          #Mes articles préférés
        </h3>
      </Segment>
      <Segment vertical color="orange">
        <Card.Group className="card-group" centered>
          { userBookmarksArticles
            ? userBookmarksArticles.map((article) => (
              <FavArticleCard key={article.id} article={article} setUserBookmarksArticles={setUserBookmarksArticles} />
            )) : <h3>Vous n'avez pas encore d'articles préférés</h3>}
        </Card.Group>
      </Segment>
    </Container>
  </motion.div>
);

// == Export
export default Favoris;
