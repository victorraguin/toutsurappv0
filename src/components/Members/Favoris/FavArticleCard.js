// == Import npm
import React from 'react';
import {
  Card, Icon, Popup, Label, Button
} from 'semantic-ui-react';
import axios from 'axios';

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
      <Card.Content extra className="card-article-container">
        <a className="card-article-header">
        <Button onClick={deleteFavoriteArticle} name={article.id} circular >Supprimer</Button>
        </a>
        {/*       <a href="#" className="card-article-header">
        <Popup
          content="Signaler l'article"
          trigger={(
            <Icon name="warning circle" size="large" />
         )}
          position="top center"
        />
      </a> */}
      </Card.Content>
      <Card
        image={article.picture ? article.picture : 'https://cdn.pixabay.com/photo/2019/04/10/11/56/watercolour-4116932_960_720.png'}
        link="true"
        href={article.url}
        target="_blank"
        rel="noreferrer"
      />
      <Label
        color="grey"
        attached="top right"
        as="a"
        href={article.url}
        target="_blank"
        rel="noreferrer"
      >{article.site}
      </Label>
      <Card.Content
        textAlign="left"
        image={article.picture}
        header={article.title}
        description={article.picture ? '' : 'Impossible de charger l\'image.'}
      />
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
