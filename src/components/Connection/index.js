// == Import npm
import React from 'react';
import {
  Form, Divider, Button, Segment, Container,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

// == Import
import './styles.scss';

// == Composant
const Connection = ({ onInputLogUserChange, handleSubmitLogin, userLog }) => {
  const handleInputChange = (evt) => {
    // Je récupère le nom de l'input qui a changé
    // et sa value (son contenu)
    const { name, value } = evt.target;
    onInputLogUserChange(name, value);
  };

  return (
    <Container>
      <Segment vertical>
        <h1 className="title">
          #Connexion
        </h1>
      </Segment>
      <Segment vertical color="teal">
        <div className="connection-container">
          <Form>
            <h2>
              Veuillez vous connecter pour poursuivre:
            </h2>
            <Form.Field>
              <p className="input-text">Email :</p>
              <input
                name="email"
                type="email"
                value={userLog.email}
                placeholder="Veuillez entrer votre email..."
                onChange={handleInputChange}
              />
            </Form.Field>
            <Divider />

            <Form.Field>
              <p className="input-text">Mot de passe :</p>
              <input
                name="password"
                type="password"
                value={userLog.password}
                placeholder="Veuillez entrer votre mot de passe..."
                onChange={handleInputChange}
              />
            </Form.Field>
            <Divider />
            <Button primary onClick={handleSubmitLogin}>Valider</Button>
          </Form>
        </div>
      </Segment>
    </Container>
  );
};

// == Export
export default Connection;
