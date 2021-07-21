// == Import npm
import React from 'react';

import { Menu, Header, Container } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

// == Import
import './styles.scss';

// == Composant

const MenuComponent = () => (
  <Container className="container">
    <Menu className="header-menu">
      <Header as="h2" path="/">toutSur.app</Header>
      <Menu.Menu position="right">
        <NavLink
          className="menu-link"
          to="/"
          exact
          activeClassName="menu-link--active"
        >
          <Menu.Item
            className="menu-button"
            position="right"
            name="Accueil"
            href="/"
          >Accueil
          </Menu.Item>
        </NavLink>
        <NavLink
          className="menu-link"
          to="/connection"
          exact
          activeClassName="menu-link--active"
        >
          <Menu.Item
            className="menu-button"
            position="right"
            name="Connection"
            href="/connection"
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
  </Container>
);

// == Export
export default MenuComponent;
