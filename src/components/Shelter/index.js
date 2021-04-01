// == Import npm
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import jwt_decode from "jwt-decode";

import { slugifyName } from 'src/utils';

import './shelter.scss';

const Shelter = ({ shelters, isLogged }) => {
  const { id_shelter } = useParams();

  const shelter = shelters.find((shel) => shel.id == id_shelter);

  // const animalsShelter = shelter.animals.filter((animal) {
  //   return animal.shelter.id == id_shelter;
  // });

  const animalsShelter = shelter.animals;

  // if (isLogged) {
  //   const token = localStorage.token;
  //   const decoded = jwt_decode(token);
  //   console.log(decoded);
  // }
  
  return(
    <div className="shelter">
      <h1>{shelter.name}</h1>
      <div>
        <div className="shelter-info">
          <img className="shelter-image" src={"http://107.22.27.42/apo-PetsWantHome-back/public/images/" + shelter.picture} alt="#" />
          <div>
            <div className="shelter-characteristics">
              <h3><span>Adresse :</span> {shelter.address}</h3>
              <h3><span>Téléphone :</span> {shelter.phoneNumber}</h3>
              <h3><span>Email :</span> {shelter.email}</h3>
            </div>
            {isLogged && (
              <div>
                <a href={"http://107.22.27.42/apo-PetsWantHome-back/public/back/shelter/" + shelter.id + "/update"}><button className="shelter-button">Modifier le profil</button></a>
                <a href={"http://107.22.27.42/apo-PetsWantHome-back/public/back/shelter/" + shelter.id}><button className="shelter-button">Gestion des animaux</button></a>
              </div>
            )}
          </div>
        </div>
        <div className="shelter-animals">
          {animalsShelter.map((animal) => (
            <Link
            to={`/animal/${slugifyName(animal.name)}`}
            className=""
            key={animal.id}
            >
            <img className="shelter-animals-image" src={"http://107.22.27.42/apo-PetsWantHome-back/public/images/" + animal.picture} alt="#" />
            </Link>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Shelter;
