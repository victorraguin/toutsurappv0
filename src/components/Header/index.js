// == Import npm
import React from 'react';
import { Button, Menu } from 'semantic-ui-react';


// == Import
import './styles.scss';

// == Composant
const Header = () => (
  <Menu className='container'>
        <Menu.Item header className="logo">
          toutSur.App
        </Menu.Item>
      <div className='button-container'>
        <Menu.Item position="right">
          <Button primary>Se connecter</Button>
        </Menu.Item>
        <Menu.Item >
          <Button primary>Inscription</Button>
        </Menu.Item> 
      </div>
  </Menu>
);

// == Export
export default Header;
