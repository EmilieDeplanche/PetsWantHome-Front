// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';

import './error.scss';
import error404 from '../../assets/images/404.png';

const Error = () => (
  <div className="error">
    <img className="error-image" src={error404} alt="Erreur 404" />
  </div>
);

export default Error;
