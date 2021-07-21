// == Import npm
import React from 'react';
import {
  Form, Divider, Button, Segment,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

// == Import
import './styles.scss';

// == Composant
const Connection = () => (
  <div className="signup-div">
    <Segment color="grey">
      <Form>
        <h2>
          Veuillez vous connecter pour poursuivre:
        </h2>
        <Form.Field>
          <p className="input-text">Email :</p>
          <input type="text" placeholder="Veuillez entrer votre email..." />
        </Form.Field>
        <Divider />

        <Form.Field>
          <p className="input-text">Mot de passe :</p>
          <input type="password" placeholder="Veuillez entrer votre mot de passe..." />
        </Form.Field>
        <Divider />
        <Button primary>Valider</Button>
      </Form>
    </Segment>
  </div>
);

// == Export
export default Connection;
