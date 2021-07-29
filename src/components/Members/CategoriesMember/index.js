// == Import npm
import React from 'react';
import { Card, Segment, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Categorie from './Categorie';

// == Import
import './styles.scss';

// == Composant
const CategoriesMember = ({
  list, onCategorieSelected, onBookmarkACategorie, usedButton,
  userBookmarksCategories,
}) => (
  <Container>
    <Segment vertical>
      <h1 className="title">
        #Accueil
      </h1>
    </Segment>

    <Segment vertical color="teal">
      <Segment vertical>
        Vous pouvez ajouter à vos favoris ou tout simplement lire leurs articles.
      </Segment>
      <Card.Group className="card-group">
        {
        list.map((card) => (
          <Categorie
            key={card.id}
            categorie={card}
            onCategorieSelected={onCategorieSelected}
            onBookmarkACategorie={onBookmarkACategorie}
            usedButton={usedButton}
            userBookmarksCategories={userBookmarksCategories}
          />
        ))
          }
      </Card.Group>
    </Segment>
  </Container>
);

// == Export
export default CategoriesMember;
