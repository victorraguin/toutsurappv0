// == Import npm
import React from 'react';
import { Card, Segment, Container, Button } from 'semantic-ui-react';
import Article from 'src/components/Members/Articles/Article';

// == Import
import './styles.scss';

// == Composant
const Favoris = ({ props }) => (
  <Container>
    <Segment vertical>
      <h1 className="title">
        #Favoris
      </h1>
      <h3 className="title">
        #Mes articles préférés
      </h3>
    </Segment>
    

   
    <Button animated='fade'>
      <Button.Content visible>supprimer de mes favoris</Button.Content>
      <Button.Content hidden>supprimer</Button.Content>
    </Button>

    <Segment vertical color="teal">
      <Card.Group className="card-group">
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
      </Card.Group>
    </Segment>
    <Segment vertical>
      <h1 className="title">
        #Favoris
      </h1>
      <h3 className="title">
        #Mes catégories préférées
      </h3>
    </Segment>

   
    <Button animated='fade'>
      <Button.Content visible>supprimer de mes favoris</Button.Content>
      <Button.Content hidden>supprimer</Button.Content>
    </Button>

    <Segment vertical color="teal">
      <Card.Group className="card-group">
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
      </Card.Group>
    </Segment>
  </Container>
);

// == Export
export default Favoris;
