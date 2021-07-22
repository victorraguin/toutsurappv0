// == Import npm
import React from 'react';
import { Form, Divider, Button } from 'semantic-ui-react';

// == Import
import './styles.scss';

// == Composant
const SignUp = () => (
  <div className="signup-container">
    <Form>
      <h2>
        Veuillez vous inscrire pour poursuivre:
      </h2>
      <Form.Field>
        <input type="text" placeholder="Nom" />
      </Form.Field>
      <Divider />

      <Form.Field>
        <input type="text" placeholder="Email" />
      </Form.Field>
      <Divider />

      <Form.Field>
        <input type="text" placeholder="Mot de passe" />
      </Form.Field>
      <Divider />

      <Form.Field>
        <input type="text" placeholder="Confirmez votre mot de passe" />
      </Form.Field>
      <Button primary>S'inscrire</Button>
    </Form>
  </div>
);

// == Export
export default SignUp;
