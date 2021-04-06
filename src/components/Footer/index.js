// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';

import './footer.scss';
import Logo from '../../assets/images/B&W-Logo-PWH.png';

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <img className="footer-container-image" src={Logo} alt="logo" />
        <Link
          to="/legal-mentions"
          className="footer-link"
        >
          Mentions Légales
        </Link>
        {/* <Link
          mailto="petswanthome@gmail.com"
          className="footer-link"
        >
          Contact
        </Link> */}
        <a className="footer-link" href="mailto:petswanthome@gmail.com">Contact</a>
        <Link
          to="/about"
          className="footer-link"
        >
          À propos
        </Link>  
    </div>
    <p className="footer-copyright">
      © 2021 PetsWantHome, Tous droits réservés.
    </p>
  </footer>
);

export default Footer;
