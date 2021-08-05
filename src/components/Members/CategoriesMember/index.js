// == Import npm
import React from 'react';
import {
  Card, Segment, Container, Grid,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Categorie from './Categorie';

// == Import
import './styles.scss';

// == Composant
const CategoriesMember = ({
  list, onCategorieSelected, onBookmarkACategorie, usedButton, userBookmarksCategoriesPage, cards, message, categorieSelected,
}) => (
  <Container>
    <Segment vertical>
      <h1 className="title">
        #Catégories
      </h1>
    </Segment>

    <Segment vertical color="teal">
      <Segment vertical>
        {message ? 'Catégorie ajoutée à vos favoris !' : 'Personnalisez votre feed d\'accueil avec vos catégories préférées ou prenez simplement le temps de parcourir une catégorie.'}

      </Segment>
      <Card.Group className="card-group">
        <Grid columns={5} doubling relaxed>
          {
        list.map((card) => (
          <Grid.Column>
            <Categorie
              key={card.id}
              categorie={card}
              onCategorieSelected={onCategorieSelected}
              onBookmarkACategorie={onBookmarkACategorie}
              /* isfavorite={userBookmarksCategoriesPage.forEach((bookmark => {
                console.log('Favoris utilisateur :', bookmark.name, bookmark.id)
                console.log('Catégorie de notre BDD:', card.name, card.id)
                console.log(bookmark.id === card.id);
                if (bookmark.id === card.id) {
                  console.log(' ---------------- Je return true pour changer le texte ---------------------');
                  return true
                }
              return }))} */
              userBookmarksCategoriesPage={userBookmarksCategoriesPage}
              cards={cards}
            />
          </Grid.Column>
        ))
          }
        </Grid>
      </Card.Group>
    </Segment>
  </Container>
);

// == Export
export default CategoriesMember;
