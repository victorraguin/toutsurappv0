// == Import npm
import React from 'react';
import {
  Card, Label, Image, Popup, Icon,
} from 'semantic-ui-react';
import axios from 'axios';

// == Import
import './styles.scss';

// == Composant
const Article = ({
  article, setUserBookmarksArticles, message, setMessage,
}) => {
  const addFavoriteArticle = async () => {
    try {
      const FavoriteArticleAdded = await axios({
        method: 'put',
        url: 'https://toutsur-app-gachimaster.herokuapp.com/articles',
        data: {
          title: article.title,
          picture: article.media,
          URL: article.url,
        },
      });
      setMessage(true);
      setTimeout(() => setMessage(false), 2000);
      console.log(FavoriteArticleAdded);
      if (FavoriteArticleAdded.data.length === 0) {
        setUserBookmarksArticles(null);
      }
      else {
        setUserBookmarksArticles(FavoriteArticleAdded.data);
      }
    }
    catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Card
      color="teal"
      className="card-style"
    >
      <Image
        src={article.media ? article.media : 'https://cdn.pixabay.com/photo/2019/04/10/11/56/watercolour-4116932_960_720.png'}
        wrapped
        ui={false}
        as="a"
        href={article.url}
        target="_blank"
        rel="noreferrer"
      />
      <Label
        color="black"
        attached="bottom"
        as="a"
        href={article.url}
        target="_blank"
        rel="noreferrer"
      >{article.site}
      </Label>
      <Popup
        content="Lire plus tard"
        link
        trigger={(
          <Label
            color="teal"
            corner="left"
            as="a"
            onClick={addFavoriteArticle}
            link
            className="label-link"
          ><Icon name="bookmark" link="true" />
          </Label>
    )}
      />
      <Card.Content
        link="true"
        href={article.url}
        target="_blank"
        rel="noreferrer"
        textAlign="left"
        image={article.media}
        header={article.title}
        description={article.media ? '' : 'Impossible de charger l\'image.'}
      />
    </Card>
  );
};

// == Export
export default Article;
