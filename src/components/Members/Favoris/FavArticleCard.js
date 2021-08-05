// == Import npm
import React from 'react';
import {
  Card, Icon, Popup, Label, Button,
} from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// == Import
import './styles.scss';

// == Composant
const FavArticleCard = ({ article, setUserBookmarksArticles }) => {
  const deleteFavoriteArticle = async () => {
    try {
      const FavoriteArticleDeleted = await axios({
        method: 'delete',
        url: 'https://toutsur-app-gachimaster.herokuapp.com/articles',
        data: {
          title: article.title,
        },
      });
      console.log(FavoriteArticleDeleted);
      if (FavoriteArticleDeleted.data.length === 0) {
        setUserBookmarksArticles(null);
      }
      else {
        setUserBookmarksArticles(FavoriteArticleDeleted.data);
      }
    }
    catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Card
      color="orange"
    >

      <Card
        image={article.picture ? article.picture : 'https://cdn.pixabay.com/photo/2019/04/10/11/56/watercolour-4116932_960_720.png'}
        link="true"
        href={article.URL}
        target="_blank"
        rel="noreferrer"
      />
      <Card.Content
        className="card-article-header"
        textAlign="left"
        href={article.URL}
        target="_blank"
        rel="noreferrer"
        link="true"
        image={article.picture}
        header={article.title}
        description={article.picture ? '' : 'Impossible de charger l\'image.'}
      />
        <Card.Content className="card-article-button" as="a" onClick={deleteFavoriteArticle}>
          <Link className="card-categorie" name={article.id}>Supprimer des favoris</Link>
        </Card.Content>
      {/*     <Card.Content extra className="card-article-container">
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
    </Card.Content> */}
    </Card>
  );
};

// == Export
export default FavArticleCard;
