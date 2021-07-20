// == Import npm
import React from 'react';
import { Card, Checkbox, Image } from 'semantic-ui-react';


// == Import
import './styles.scss';

const extra = (
  <p>
    <Checkbox/>
  </p>
)

// == Composant
const Categorie = ({categorie}) => (

  <div>
    <Card
      image='https://react.semantic-ui.com/images/avatar/large/elliot.jpg'
      header={categorie.name}
      extra={<Checkbox/>}
    >
    </Card>
  </div>
);

// == Export
export default Categorie;
