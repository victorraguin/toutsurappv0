// == Import npm
import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';


// == Import
import './styles.scss';

// == Composant
const Categorie = () => (
    <Card>
      
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className="date">Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
     
    </Card.Content>
    <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" wrapped ui={false} />
  </Card>
);

// == Export
export default Categorie;
