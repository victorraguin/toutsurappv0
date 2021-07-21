// == Import npm
import React from 'react';
import {
  Card, Button, Icon, Popup,
} from 'semantic-ui-react';

// == Import
import './styles.scss';

// == Composant
const Categorie = ({ categorie }) => (
  <div>
    <a href="#">
      <Card
        className="card-categorie"
        image={categorie.image}
        header={`#${categorie.categorie}`}
        color={categorie.color}
        textalign="center"
      />
    </a>
  </div>
);

// == Export
export default Categorie;
