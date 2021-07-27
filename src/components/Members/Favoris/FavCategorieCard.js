// == Import npm
import React from 'react';
import {
  Card, Icon, Image, Popup, Button
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

// == Import
import './styles.scss';



// == Composant
const FavCategorieCard = () => {

  const oneDeleteClick = () => {
    console.log("fonctionne")
  }

  return (
  <Card color="orange">
              <Card.Content extra className="card-article-container">
          <a className="card-article-header">
          <Popup
          content="Supprimer la catégorie"
          trigger={(
            <Icon name="close" size="large" color="red"  onClick={oneDeleteClick} />
         )}
          position="top center"
        />
          </a>
    </Card.Content>
    <Image src="https://cdn.pixabay.com/photo/2021/07/19/20/11/kitten-6479019_960_720.jpg" wrapped ui={false} />
    <Card.Content>
      <Card.Header>#Minousss</Card.Header>
    </Card.Content>

  </Card>
)
          }

// == Export
export default FavCategorieCard;
