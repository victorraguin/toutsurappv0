// == Import npm
import React from 'react';
import { Card, Segment, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Categorie from './Categorie';

// == Import
import './styles.scss';

// == Composant
const Categories = ({ list, onCategorieSelected }) => (
  <Container>
    <Segment vertical>
      <h1 className="title">
        #Accueil
      </h1>
    </Segment>

    <Segment vertical color="teal">
      <Segment vertical>
        Pour enregistrer vos catégories et recevoir l'ensemble des articles correspondant, vous pouvez aussi<Link to="/inscription"> vous inscrire... !</Link>
      </Segment>
      <Card.Group className="card-group">
        {
        list.map((card) => (
          <Categorie key={card.id} categorie={card} onCategorieSelected={onCategorieSelected} />
        ))
          }
      </Card.Group>
    </Segment>
  </Container>
);

// == Export
export default Categories;
