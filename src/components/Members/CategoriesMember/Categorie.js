// == Import npm
import React from 'react';
import { Card, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

// == Import
import './styles.scss';

// == Composant
const Categorie = ({
  categorie, onCategorieSelected, onBookmarkACategorie, userBookmarksCategories,
}) => (
  <div>
    <Card.Content>
      <Button primary name={categorie.id} onClick={onBookmarkACategorie}>
        Enregistrer {categorie.name} en favoris
      </Button>
    </Card.Content>
    <Link
      to="/articles"
      onClick={onCategorieSelected}
      name={categorie.name}
      id={categorie.id}
    >
      <Card
        className="card-categorie"
        image={categorie.picture}
        header={`#${categorie.name}`}
        color={categorie.color}
        align="center"
        name={categorie.name}
      />
    </Link>
  </div>
);

// == Export
export default Categorie;
