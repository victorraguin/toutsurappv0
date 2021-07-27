// == Import npm
import React from 'react';
import { Card, Segment, Container, Button } from 'semantic-ui-react';
import FavArticleCard from './FavArticleCard';
import FavCategorieCard from './FavCategorieCard';

// == Import
import './styles.scss';

// == Composant
const Favoris = () => (
  <Container>
        <Segment vertical>
      <h1 className="title">
        #Favoris
      </h1>
      <h3 className="title">
        #Mes catégories préférées
      </h3>
    </Segment>
    <Segment vertical color="teal">
      <Card.Group className="card-group" centered>
        <FavCategorieCard />
        <FavCategorieCard />
      </Card.Group>
    </Segment>

    <Segment vertical>
      <h3 className="title">
        #Mes articles préférés
      </h3>
    </Segment>
    <Segment vertical color="orange">
      <Card.Group className="card-group" >
        <FavArticleCard />
        <FavArticleCard />
        <FavArticleCard />
        <FavArticleCard />
        <FavArticleCard />
      </Card.Group>
    </Segment>
  </Container>
);

// == Export
export default Favoris;
