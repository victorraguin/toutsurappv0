// == Import npm
import React from 'react';
import { Button } from 'semantic-ui-react';


// == Import
import './styles.scss';

// == Composant
const Header = () => (
  <div className="header">
    <h1 className="logo">
      toutSur.app
    </h1>
      <button primary className="ui button se-connecter">Se connecter</button>
      <button position="right" className="ui button inscription">Inscription</button>
  </div>
);

// == Export
export default Header;
