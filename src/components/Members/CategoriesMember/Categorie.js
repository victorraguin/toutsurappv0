// == Import npm
import React from 'react';
import {
  Card, Icon, Popup, Button,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

// == Import
import './styles.scss';

// == Composant
const Categorie = ({ categorie, onCategorieSelected, onBookmarkACategorie }) => (
  <Popup
    flowing
    hoverable
    position="top center"
    inverted
    trigger={(
      <Link
        to="/articles"
        onClick={onCategorieSelected}
        name={categorie.name}
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
  )}
  >
    <Button size="small" inverted basic color="pink" name={categorie.id} onClick={onBookmarkACategorie}>Ajouter en favoris?</Button>
  </Popup>
);

// == Export
export default Categorie;
