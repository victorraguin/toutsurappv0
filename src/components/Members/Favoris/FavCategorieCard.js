// == Import npm
import React from 'react';
import {
  Card, Icon, Image, Popup, Button,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

// == Import
import './styles.scss';

// == Composant
const FavCategorieCard = ({ categorie, onDeleteClick }) => (
  <Card color={categorie.color}>
    <Card.Content extra className="card-article-container">
      <Button id={categorie.id} onClick={onDeleteClick} name={categorie.id} circular>Supprimer</Button>
    </Card.Content>
    <Image src={categorie.picture} wrapped ui={false} />
    <Card.Content>
      <Card.Header>#{categorie.name}</Card.Header>
    </Card.Content>
  </Card>
);

// == Export
export default FavCategorieCard;
