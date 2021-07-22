// == Import npm
import React from 'react';
import { Form, Divider, Button } from 'semantic-ui-react';


// == Import
import './styles.scss';

// == Composant
const SignUpForm = ({userSignUp, handleInputSubmit, handleInputChange}) => {
  // == Fonctions

  return(
  <div className='signup-div'>
    <Form 
    onSubmit={(e) => {
      //J'empeche le rechargement au submit
      e.preventDefault();
      handleInputSubmit(e);
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
        value={userSignUp.name}
        onChange= {handleInputChange}
        />
      </Form.Field>
      <Divider />

      <Form.Field>
        <input 
        type='text' 
        placeholder='Email'
        required
        name='email'
        value={userSignUp.email}
        onChange= {handleInputChange}
        />
      </Form.Field>
      <Divider />

      <Form.Field>
        <input 
        type='text'
        placeholder='Mot de passe'
        required
        name='password'
        value={userSignUp.password}
        onChange= {handleInputChange}
        />
      </Form.Field>
      <Divider />

      <Form.Field>
        <input 
        type='text'
        placeholder='Confirmez votre mot de passe'
        required
        name='confirmPassword'
        value={userSignUp.confirmPassword}
        onChange= {handleInputChange}
        />
      </Form.Field>
      <Button 
      primary 
      onClick={handleInputSubmit}
      >
        S'inscrire
        </Button>
    </Form>
  </div>
  )
};


// == Export
export default SignUpForm;
