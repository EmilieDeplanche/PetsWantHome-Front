import { connect } from 'react-redux';

import {
  saveUpdateAnimal,
} from 'src/actions/animals';

import {
  updateUserField,
} from 'src/actions/auth';

import { getInfoBirthDate } from 'src/utils';

import AnimalModification from 'src/components/AnimalsListModification/AnimalModification';

/**
 * To display data in the component
 */
const mapStateToProps = (state) => ({
  animalModificationName: state.animals.name,
  animalModificationBirthdate: getInfoBirthDate(state.animals.birthdate),
  animalModificationStatus: state.animals.status,
  animalModificationGender: state.animals.gender,
  animalModificationSpecies: state.animals.species.id,
  animalModificationRace: state.animals.race.id,
  animalModificationCatCohabitation: state.animals.catCohabitation,
  animalModificationChildCohabitation: state.animals.childCohabitation,
  animalModificationDogCohabitation: state.animals.dogCohabitation,
  animalModificationNacCohabitation: state.animals.nacCohabitation,
  animalModificationUnknownCohabitation: state.animals.unknownCohabitation,
  animalModificationdescription: state.animals.description,
  animalModificationPicture: state.animals.picture,
});

/**
 * To dispatch function in the component
 */
const mapDispatchToProps = (dispatch) => ({
  /**
   * Action which will save the update of the informations for an animal
   */
  saveUpdateAnimal: () => {
    const action = saveUpdateAnimal();
    dispatch(action);
  },

  /**
   * Action which will modify the value of an input
   * @param {string} value : Value entered in the input
   * @param {string} fieldName : Name of the input
   */
  changeField: (value, fieldName) => {
    const action = updateUserField(value, fieldName);
    dispatch(action);
  },
});

// === Assistant creation for the component
export default connect(mapStateToProps, mapDispatchToProps)(AnimalModification);
