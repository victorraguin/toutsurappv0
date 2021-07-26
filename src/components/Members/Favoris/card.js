// == Import npm
import React from 'react';
import { Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

// == Import
import './styles.scss';

// == Composant
const Card = ({ props }) => (
  <Link
    to="/articles"
    onClick={onCategorieSelected}
    name={props.name}
  >
    <Card
      className="card-container"
      image={props.picture}
      header={`#${props.name}`}
      color={props.color}
      align="center"
      name={props.name}
    />
  </Link>
);

// == Export
export default Card;
