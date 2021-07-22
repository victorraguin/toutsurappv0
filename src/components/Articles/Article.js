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
      image='https://cdn.pixabay.com/photo/2016/09/09/23/27/the-ostrich-1658267_960_720.jpg'
      header={`#${article.title}`}
      color="teal"
      align="center"
    />
  </Link>
);

// == Export
export default Article;
