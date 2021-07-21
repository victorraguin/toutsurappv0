// == Import npm
import React from 'react';
import { Card, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

// == Import
import './styles.scss';

// == Composant
const Categorie = ({ categorie }) => (
  <Link
    to="/articles"
  >
    <Card
      className="card-categorie"
      image={categorie.image}
      header={`#${categorie.name}`}
      color="blue"
      text
      align="center"
    />
  </Link>
);

// == Export
export default Categorie;
