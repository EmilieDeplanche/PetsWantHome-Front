// == Import npm
import React from 'react';

// == Import local
import './error.scss';
import error404 from '../../assets/images/404.png';

// == Component
/**
 * Error page component
 */
const Error = () => (
  <div className="error">
    <img className="error-image" src={error404} alt="Erreur 404" />
  </div>
);

// == Export
export default Error;
