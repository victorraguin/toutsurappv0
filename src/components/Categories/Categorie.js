// == Import npm
import React from 'react';
import { Card } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

// == Import
import './styles.scss';

// == Composant
const Categorie = ({ categorie }) => (
  <div>
    <NavLink
      to="/articles"
      exact
    >
      <Card
        className="card-categorie"
        image={categorie.image}
        header={`#${categorie.categorie}`}
        color={categorie.color}
        textalign="center"
      />
    </NavLink>
  </div>
);

// == Export
export default Categorie;
