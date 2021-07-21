// == Import npm
import React from 'react';

import { Menu, Header } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

// == Import
import './styles.scss';

// == Composant

const MenuComponent = () => (
  <Menu className="header-menu">
    <Header as="h2" href="/">toutSur.app</Header>
    <Menu.Menu position="right">
      <NavLink
        className="menu-link"
        to="/connexion"
        exact
        activeClassName="menu-link--active"
      >
        <Menu.Item
          className="menu-button"
          position="right"
          name="Connexion"
          href="/connexion"
        >Connexion
        </Menu.Item>
      </NavLink>
      <NavLink
        className="menu-link"
        to="/inscription"
        exact
        activeClassName="menu-link--active"
      >
        <Menu.Item
          className="menu-button"
          position="right"
          name="Inscription"
          href="/inscription"
          color="blue"
        >Inscription
        </Menu.Item>
      </NavLink>
    </Menu.Menu>
  </Menu>
);

// == Export
export default MenuComponent;
