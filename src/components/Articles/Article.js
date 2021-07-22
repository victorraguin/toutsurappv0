// == Import npm
import React from 'react';
import { Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

// == Import
import './styles.scss';

// == Composant
const Article = ({ article }) => (
  <Link
    to={article.url}
  >
    <Card
      className="card-article"
      image={article.picture}
      header={`#${article.title}`}
      color="teal"
      align="center"
    />
  </Link>
);

// == Export
export default Article;
