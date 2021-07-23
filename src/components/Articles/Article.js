// == Import npm
import React from 'react';
import { Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

// == Import
import './styles.scss';

// == Composant
const Article = ({ article }) => (
  <a
    href={article.link}
    target="_blank"
  >
    <Card
      className="card-article"
      image={article.media.content.[0].url}
      header={`${article.title}`}
      color={article.color}
      align="center"
    />
  </a>
);

// == Export
export default Article;
