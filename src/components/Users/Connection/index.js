// == Import npm
import React from 'react';
import {
  Form, Divider, Button, Segment, Container, Message,
} from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import { motion } from 'framer-motion';

// == Import styles 
import './styles.scss';

// == Connection Component
const Connection = ({
  onInputLogUserChange, handleSubmitLogin, userLog, setUserLog,
}) => {
  const handleInputChange = (evt) => {
    // I get the name of the input that changed
    // and his value
    const { name, value } = evt.target;
    onInputLogUserChange(name, value);
    if (userLog.error) {
      setUserLog({
        ...userLog,
        password: '',
        error: false,
      });
    }
    if (userLog.databaseError) {
      setUserLog({
        ...userLog,
        password: '',
        databaseError: false,
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container>
        <Segment vertical>
          <h1 className="title">
            #Connexion
          </h1>
        </Segment>
        <Segment vertical color="teal">
          <div className="connection-container">

            <Form
              error={userLog.error}
            >
              <h2>
                Veuillez vous connecter pour poursuivre:
              </h2>
              { userLog.error
                ? (
                  <Message
                    error
                    header="Il y a une erreur dans vos données :"
                    content="Votre email et/ou mot de passe n'est pas valide. Veuillez vérifier vos informations..."
                  />
                )
                : null}
              { userLog.logged
                ? (
                  <Message
                    color="olive"
                    header="Bienvenue sur toutSur.app !"
                    content="Vous êtes maintenant connecté !"
                  />
                )
                : null}
              { userLog.databaseError
                ? (
                  <Message
                    color="pink"
                    header="Erreur à la base de données..."
                    content="Réessayez ou contactez un administrateur"
                  />
                )
                : null}
              <Form.Field required>
                <label className="input-text">Email</label>
                <input
                  name="email"
                  type="email"
                  value={userLog.email}
                  placeholder="Veuillez entrer votre email..."
                  onChange={handleInputChange}
                />
              </Form.Field>
              <Divider />

              <Form.Field required>
                <label className="input-text">Mot de passe</label>
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
              { userLog.logged ? <Redirect to="/" /> : null }
            </Form>
          </div>
        </Segment>
      </Container>
    </motion.div>
  );
};

// == Export
export default Connection;
