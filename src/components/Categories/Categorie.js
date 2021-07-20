// == Import npm
import React from 'react';
import { Card, Checkbox, Image } from 'semantic-ui-react';


// == Import
import './styles.scss';

// == Composant
const Categorie = ({categorie}) => (
  <div>
    <Card
      image='https://react.semantic-ui.com/images/avatar/large/elliot.jpg'
      header={categorie.title}
      extra={<Checkbox/>}
    >
    </Card>
  </div>
);

// == Export
export default Categorie;
