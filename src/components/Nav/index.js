import React from 'react';
import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import './nav.scss';
import Logo from '../../assets/images/B&W-Logo-PWH.png';

const Nav = () => (
  <nav className="nav">
    <div className="menu--link--mobile">
      <Menu {...Nav}>
        <ul>
          <NavLink
            to="/"
            className="menu-item"
            activeClassName="nav-item--active"
            exact
          >
            Accueil
          </NavLink>
          <NavLink
            to="/adoption"
            className="menu-item"
            activeClassName="nav-item--active"
          >
            Adoptions
          </NavLink>
          <NavLink
            to="/login"
            className="menu-item"
            activeClassName="nav-item--active"
            exact
          >
            Connexion
          </NavLink>
          <NavLink
            to="/register"
            className="menu-item"
            activeClassName="nav-item--active"
          >
            Inscription
          </NavLink>
        </ul>
      </Menu>
      <img src={Logo} alt="logo" className="logo-mobile" />
    </div>

    <div className="menu-link">
      <img src={Logo} alt="logo" />
      <ul>
        <NavLink
          to="/"
          className="nav-item"
          activeClassName="nav-item--active"
          exact
        >
          Accueil
        </NavLink>
        <NavLink
          to="/adoption"
          className="nav-item"
          activeClassName="nav-item--active"
        >
          Adoptions
        </NavLink>
      </ul>
    </div>
    <div className="menu-login">
      <ul>
        <NavLink
          to="/login"
          className="nav-item"
          activeClassName="nav-item--active"
          exact
        >
          Connexion
        </NavLink>
        <NavLink
          to="/register"
          className="nav-item"
          activeClassName="nav-item--active"
        >
          Inscription
        </NavLink>
      </ul>
    </div>
  </nav>
);

export default Nav;
