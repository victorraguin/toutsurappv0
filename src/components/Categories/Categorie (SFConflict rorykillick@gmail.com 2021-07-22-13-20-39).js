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
      image="https://cdn.pixabay.com/photo/2017/08/29/21/17/notebook-2694903_960_720.jpg"
      header={`#${categorie.name}`}
      color="teal"
      text
      align="center"
    />
  </Link>
);

// == Export
export default Categorie;
