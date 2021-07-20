// == Import npm
import React from 'react';
import { Button, Menu, } from 'semantic-ui-react';


// == Import
import './styles.scss';

// == Composant
const Header = () => (
    <Menu className="header" >
      <h1 className="logo">
        toutSur.App
      </h1>
        <Menu.Item position="right">
          <Button primary>Se connecter</Button>
        </Menu.Item>
        <Menu.Item >
          <Button primary>Inscription</Button>
        </Menu.Item> 
    </Menu>
);

// == Export
export default Header;
