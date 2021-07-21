// == Import npm
import React from 'react';
import { Form, Divider, Button } from 'semantic-ui-react';


// == Import
import './styles.scss';

// == Composant
const SignUpForm = ({form}) => {
  // == Fonction

  const handleInputChange = (evt) => {
    // Je récupère le nom de l'input qui a changé
    // et sa value (son contenu)
    const { name, value } = evt.target;
    console.log(name, value);
  };

  return(
  <div className='signup-div'>
    <Form 
    onSubmit={(e) => {
      //J'empeche le rechargement au submit
      e.preventDefault();
    }}>
      <h2>
        Veuillez vous inscrire pour poursuivre:
      </h2>
      <Form.Field>
        <input
        type='text' 
        placeholder='Nom'
        required
        name='name'
        onChange= {handleInputChange}
        />
      </Form.Field>
      <Divider />

      <Form.Field>
        <input 
        type='text' 
        placeholder='Email'
        name='email'
        onChange= {handleInputChange}
        />
      </Form.Field>
      <Divider />

      <Form.Field>
        <input 
        type='text'
        placeholder='Mot de passe'
        name='password'
        onChange= {handleInputChange}
        />
      </Form.Field>
      <Divider />

      <Form.Field>
        <input 
        type='text'
        placeholder='Confirmez votre mot de passe'
        name='confirm password'
        onChange= {handleInputChange}
        />
      </Form.Field>
      <Button 
      primary 
      type='submit' 
      >
        S'inscrire
        </Button>
    </Form>
  </div>
  )
};


// == Export
export default SignUpForm;
