// === Action Types

export const UPDATE_USER_FIELD = 'UPDATE_USER_FIELD';
export const LOG_IN = 'LOG_IN';
export const SAVE_USER = 'SAVE_USER';
export const LOG_OUT = 'LOG_OUT';
export const NEW_USER = 'NEW_USER';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const EMAIL_ERROR = 'EMAIL_ERROR';
export const PASSWORD_ERROR = 'PASSWORD_ERROR';
export const LOADER = 'LOADER';

// === Action Creators

/**
 * Action to change the value of an input
 * @param {*} newValue New value of the input
 * @param {*} name Name of the input
 */
export const updateUserField = (newValue, name) => ({
  type: UPDATE_USER_FIELD,
  newValue,
  name,
});

/**
 * Action to dispatch when an user is logging in
 */
export const logIn = () => ({
  type: LOG_IN,
});

/**
 * Action to dispatch when an user is logged in
 * @param {Boolean} isLogged 
 * @param {String} token Token got from the API
 */
export const saveUser = (token) => ({
  type: SAVE_USER,
  token,
});

/**
 * Action to dispatch when an user is logging out
 */
export const logOut = () => ({
  type: LOG_OUT,
});

/**
 * Action to dispatch when a new user is created
 */
export const newUser = () => ({
  type: NEW_USER,
});

/**
 * Action to dispatch when there is a log-in error
 */
export const loginError = () => ({
  type: LOGIN_ERROR,
});

/**
 * Action to dispatch when there is an email creation error
 */
export const emailError = () => ({
  type: EMAIL_ERROR,
});

/**
 * Action to dispatch when there is a password creation error
 */
export const passwordError = () => ({
  type: PASSWORD_ERROR,
});

/**
 * Action to dispatch to set the loading screen on
 */
export const loader = () => ({
  type: LOADER,
});
