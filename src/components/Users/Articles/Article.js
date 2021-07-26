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
    rel="noreferrer"
  >
    <Card
      className="card-article"
      image={article.media}
      header={`${article.title}`}
      description={article.site}
      color="blue"
      align="center"
    />
  </a>
);

// == Export
export default Article;
