// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';

// == Import local
import './footer.scss';

// == Component
/**
 * Footer component with navigation links
 */
const Footer = () => (
  <footer className="footer">
    <div />
    <p className="footer-copyright">
      © 2021 PetsWantHome, Tous droits réservés.
    </p>
    <div className="footer-container">

      <a className="footer-link" href="mailto:petswanthome@gmail.com">Contact</a>
      <Link
        to="/about"
        className="footer-link"
      >
        À propos
      </Link>
      <Link
        to="/legal-mentions"
        className="footer-link"
      >
        Mentions Légales
      </Link>
    </div>
  </footer>
);

// == Export
export default Footer;
