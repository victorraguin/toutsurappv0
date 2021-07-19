// == Import npm
import React from 'react';
import { Card, Checkbox, Image } from 'semantic-ui-react';


// == Import
import './styles.scss';

// == Composant
const Categorie = () => (
    <Card>
      <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" wrapped ui={false} />
    <Card.Content>
      <Card.Header>
        <Checkbox position="left"/>
        Matthew
      </Card.Header>
      
    </Card.Content>
  </Card>
);

// == Export
export default Categorie;
