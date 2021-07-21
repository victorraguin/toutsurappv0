// == Import npm
import React from 'react';
import { Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

// == Import
import './styles.scss';

// == Composant
const Categorie = ({ categorie }) => (
  <div>
    <Link
      to="/articles"
      exact
    >
      <Card
        className="card-categorie"
        image={categorie.image}
        header={`#${categorie.name}`}
        color={categorie.color}
        textalign="center"
      />
    </Link>
  </div>
);

// == Export
export default Categorie;
