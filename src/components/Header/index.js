// == Import npm
import React from 'react';

import { Menu, Header, Container } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

// == Import
import './styles.scss';

// == Composant

const MenuComponent = ({ userLog }) => (
  <Container className="container">
    <Menu secondary className="header-menu">
      <NavLink
        to="/"
        className="menu-title"
      >
        <Header as="h2">toutSur.app</Header>
      </NavLink>
      { userLog.logged
        ? (
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
              to="/favoris"
              exact
              activeClassName="menu-link--active"
            >
              <Menu.Item
                className="menu-button"
                position="right"
                name="favoris"
                href="/favoris"
              >Mes favoris
              </Menu.Item>
            </NavLink>
            <NavLink
              className="menu-link"
              to="/blog"
              exact
              activeClassName="menu-link--active"
            >
              <Menu.Item
                className="menu-button"
                position="right"
                name="blog"
                href="/blog"
                color="blue"
              >Créer un article
              </Menu.Item>
            </NavLink>
            <NavLink
              className="menu-link"
              to="/disconnect"
              exact
              activeClassName="menu-link--active"
            >
              <Menu.Item
                className="menu-button"
                position="right"
                name="disconnect"
                href="/disconnect"
                color="blue"
              >Aurevoir
              </Menu.Item>
            </NavLink>
          </Menu.Menu>
        )
        : (
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
        )}
    </Menu>
  </Container>
);

// == Export
export default MenuComponent;
