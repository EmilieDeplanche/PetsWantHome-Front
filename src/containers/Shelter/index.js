import { connect } from 'react-redux';

import Shelter from 'src/components/Shelter';

/**
 * To display data in the component
 */
const mapStateToProps = (state) => ({
  shelters: state.shelter.sheltersList,
  isLogged: state.auth.isLogged,
});

/**
 * To dispatch function in the component
 */
const mapDispatchToProps = (dispatch) => ({
});

// === Assistant creation for the component
export default connect(mapStateToProps, mapDispatchToProps)(Shelter);
