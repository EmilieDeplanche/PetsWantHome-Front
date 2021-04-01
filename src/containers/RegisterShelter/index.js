import { connect } from 'react-redux';

import { updateUserField, newShelterCreation } from 'src/actions/auth';
import RegisterShelter from 'src/components/RegisterShelter';

const mapStateToProps = (state) => ({
    email: state.shelter.email,
    password: state.shelter.password,
    name: state.shelter.name,
    confirmPassword: state.shelter.confirmPassword,
    address: state.shelter.address,
    phone_number: state.shelter.phone_number,
    picture: state.shelter.picture,
});

const mapDispatchToProps = (dispatch) => ({
    changeField: (value, fieldName) => {
        dispatch(updateUserField(value, fieldName));
    },
    handleLogin: () => {
        console.log('click');
        dispatch(newShelterCreation());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterShelter);
