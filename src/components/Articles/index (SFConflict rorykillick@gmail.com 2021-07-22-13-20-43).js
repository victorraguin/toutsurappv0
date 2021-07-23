// == Import npm
import React from 'react';
import {
  Card, Button, Icon, Image,
} from 'semantic-ui-react';

// == Import
import './styles.scss';

// == Composant
const Articles = () => (
  <div>
    <Button floated="left">#Musique</Button>
    <Button floated="right">#Accueil</Button>
    <Button.Group buttons={['popular', 'Upvoted', 'Discussed']} />

    <Card.Group className="articles" itemsPerRow={4}>
      <Card>
        <Image src="https://cdn.pixabay.com/photo/2016/04/30/14/58/music-1363069_960_720.jpg" wrapped ui={false} />
        <Card.Content>
          <Card.Header>
            Titre de l'article
          </Card.Header>
          <Card.Meta>
            <span className="date">#Musique</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content className="card-icons" extra>
          <a>
            <Icon size="large" className="card-icon" name="fire" />
          </a>
          <a>
            <Icon size="large" className="card-icon" name="bookmark" />
          </a>
          <a>
            <Icon size="large" className="card-icon" name="pencil alternate" />
          </a>
        </Card.Content>
      </Card>
    </Card.Group>

  </div>
);

// == Export
export default Articles;
