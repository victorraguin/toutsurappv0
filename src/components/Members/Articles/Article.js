// == Import npm
import React from 'react';
import {
  Card, Icon, Image, Popup,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

// == Import
import './styles.scss';




// == Composant
const Article = () => (
  <Card color="orange">
    <Card.Content extra className="card-article-container">
      <a href="#" className="card-article-header">
        <Popup
          content="Ajouter l'article à vos favoris"
          trigger={(
            <Icon name="bookmark" size="large" />
            )}
          position="top center"
        />
      </a>
      <a href="#" className="card-article-header">
        <Popup
          content="Signaler l'article"
          trigger={(
            <Icon name="warning circle" size="large" />
         )}
          position="top center"
        />
      </a>

      <Icon name="close" size="large" color="red" pointer="float" /> 

    </Card.Content>

    <Image src="https://cdn.pixabay.com/photo/2021/07/13/20/00/lion-6464429_960_720.jpg" wrapped ui={false} />
    <Card.Content>
      <Card.Header>Le lion c'est un gros chat</Card.Header>
    </Card.Content>
    <Card.Content extra className="card-article-container">
      <a className="card-article-header">
        <Popup
          content="Upvoter l'article"
          trigger={(
            <Icon name="fire" size="large" color="orange" />
        )}
          position="bottom center"
        />
      </a>
      <a className="card-article-header">
        <Popup
          content="Commenter l'article"
          trigger={(
            <Icon name="commenting" size="large" />
      )}
          position="bottom center"
        />
      </a>
    </Card.Content>
  </Card>
);

// == Export
export default Article;
