// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';

import ShelterModificationField from './ShelterModificationfield';

import './shelterModification.scss';

// == Component
/**
 * Component to display the informations of one shelter
 * @param {Array} shelters List of all the shelters
 * @param {String} shelterModificationName Updating shelter name
 * @param {String} shelterModificationAdress Updating shelter address
 * @param {String} shelterModificationCity Updating shelter city
 * @param {String} shelterModificationZip Updating shelter zip code
 * @param {String} shelterModificationPhone Updating shelter phone number
 * @param {String} shelterModificationEmail Updating shelter email
 * @param {Function} loadProfile Function to load the profile informations in the state
 * @param {Function} changeField Function to update the input fields' value
 * @param {Function} submitModification Function to submit the form
 *        and new informations for the shelter
 * @param {Number} shelterUpdateError Number which displays or not the error message
 */
const ShelterModification = ({
  shelters,
  shelterModificationName,
  shelterModificationAdress,
  shelterModificationCity,
  shelterModificationZip,
  shelterModificationPhone,
  shelterModificationEmail,
  loadProfile,
  changeField,
  submitModification,
  shelterUpdateError,
}) => {
  const { idShelter } = useParams();

  // eslint-disable-next-line eqeqeq
  const shelter = shelters.find((shel) => shel.id == idShelter);

  console.log(shelter);

  useEffect(() => {
    loadProfile(shelter);
  }, []);

  const submitForm = (evt) => {
    evt.preventDefault();
    submitModification();
  };

  return (
    <div className="shelterModification">
      <h1>{shelter.name}</h1>
      <h2>Modification du refuge</h2>
      {shelterUpdateError === 1
      && (
        <h3 className="updateSuccess">Les modifications ont bien été prise en compte.</h3>
      )}
      {shelterUpdateError === 2
      && (
        <h3 className="updateFail">Les modifications n'ont pas été prise en compte.</h3>
      )}
      <form className="modificationForm" onSubmit={submitForm}>
        <ShelterModificationField
          name="name"
          label="Nom"
          id="shelterModificationName"
          value={shelterModificationName}
          placeholder="Nom du refuge"
          pattern="[a-zA-Zéèàçêîïëôù\-' ]{1,}"
          required="true"
          manageChange={(value, identifier) => (changeField(value, identifier))}
        />
        <ShelterModificationField
          name="address"
          label="Adresse"
          id="shelterModificationAdress"
          value={shelterModificationAdress}
          placeholder="Adresse du refuge"
          pattern="[a-zA-Z0-9éèàçêîïëôù\-' ]{1,}"
          required="true"
          manageChange={(value, identifier) => (changeField(value, identifier))}
        />
        <ShelterModificationField
          name="zip"
          label="Code postal"
          id="shelterModificationZip"
          value={shelterModificationZip}
          placeholder="Code postal du refuge"
          pattern="[0-9]{5}"
          required="true"
          manageChange={(value, identifier) => (changeField(value, identifier))}
        />
        <ShelterModificationField
          name="city"
          label="Ville"
          id="shelterModificationCity"
          value={shelterModificationCity}
          placeholder="Ville du refuge"
          pattern="[a-zA-Zéèàçêîïëôù\-' ]{1,}"
          required="true"
          manageChange={(value, identifier) => (changeField(value, identifier))}
        />
        <ShelterModificationField
          name="phoneNumber"
          label="Numéro de téléphone (au format 0123456789)"
          id="shelterModificationPhone"
          value={shelterModificationPhone}
          placeholder="Numéro de téléphone du refuge"
          pattern="[0-9]{10}"
          required="true"
          manageChange={(value, identifier) => (changeField(value, identifier))}
        />
        <ShelterModificationField
          name="email"
          type="email"
          label="Email du refuge"
          id="shelterModificationEmail"
          value={shelterModificationEmail}
          placeholder="Adresse Email du refuge"
          pattern="[a-z0-9-.]{1,}@[a-z0-9]{1,}\.[a-z]{1,}"
          required="true"
          manageChange={(value, identifier) => (changeField(value, identifier))}
        />
        <ShelterModificationField
          name="picture"
          label="Photo du refuge"
          id="shelterModificationPicture"
          type="file"
          value=""
          accept="image/*"
          placeholder="Photo du refuge"
          manageChange={(value, identifier) => (changeField(value, identifier))}
        />
        <button type="submit" className="saveChanges">
          Enregistrer
        </button>
      </form>
      {shelterUpdateError === 1
      && (
        <h3 className="updateSuccess">Les modifications ont bien été prise en compte.</h3>
      )}
      {shelterUpdateError === 2
      && (
        <h3 className="updateFail">Les modifications n'ont pas été prise en compte.</h3>
      )}
      <Link to={`/shelter/${idShelter}`} className="backLink">
        <button type="button" className="backList">
          Retour à la liste
        </button>
      </Link>
    </div>
  );
};

// == PropTypes validation
ShelterModification.propTypes = {
  shelters: PropTypes.array.isRequired,
  shelterModificationName: PropTypes.string.isRequired,
  shelterModificationAdress: PropTypes.string.isRequired,
  shelterModificationCity: PropTypes.string.isRequired,
  shelterModificationZip: PropTypes.string.isRequired,
  shelterModificationPhone: PropTypes.string.isRequired,
  shelterModificationEmail: PropTypes.string.isRequired,
  loadProfile: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
  submitModification: PropTypes.func.isRequired,
  shelterUpdateError: PropTypes.number.isRequired,
};

// == Export
export default ShelterModification;
