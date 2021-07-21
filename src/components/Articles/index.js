// == Import npm
import React from 'react';
import { Card, Button } from 'semantic-ui-react';

// == Import
import './styles.scss';

// == Composant
const Articles = () => (
  <div>
    <Button floated="left">#Musique</Button>
    <Button floated="right">#Accueil</Button>
    <Button.Group buttons={['popular', 'Upvoted', 'Discussed']} />

    <Card.Group className="articles" itemsPerRow={4}>
      <Card
        image="https://react.semantic-ui.com/images/avatar/large/elliot.jpg"
        header="Elliot Baker"
        meta="Friend"
        description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
      />
    </Card.Group>

  </div>
);

// == Export
export default Articles;
