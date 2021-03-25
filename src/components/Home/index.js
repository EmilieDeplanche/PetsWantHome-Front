// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';

import './home.scss';
import paw from '../../assets/images/pawnextb&w.png';

const Home = ({ animals }) => (
  <main className="home">
    <div className="banner">
      <h1 className="title">Pets Want Home</h1>
    </div>
    <h2 className="subtitle">Quelques animaux disponibles à l'adoption</h2>
    <div className="thumbnails">
      {animals.map((animal) => (
        <Link
        to="/animal/1"
        className="thumbnails-link"
        key={animal.id}
      >
        {/* <h1>{animal.name}</h1> */}
        <img className="thumbnails-image" src={"http://107.22.27.42/apo-PetsWantHome-back/public/Images/" + animal.picture} alt="#" />
      </Link>
      ))}
      
      <Link
        to="/adoption"
        className="thumbnails-link"
      >
        <img className="thumbnails-image" src={paw} alt="#" />
      </Link>
    </div>
  </main>
);

export default Home;
