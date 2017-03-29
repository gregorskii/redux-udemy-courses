import { browserHistory } from 'react-router';
import API from 'api';

const {
  postSignInWrapped,
  postSignUpWrapped
} = API;

export const AUTH_USER = 'AUTH_USER';
export const UNAUTH_USER = 'UNAUTH_USER';
export const AUTH_ERROR = 'AUTH_ERROR';
export const SIGNUP_USER = 'SIGNUP_USER';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';

export const authError = (type) => {
  // Clear auth_token from LS
  localStorage.removeItem('auth_token');
  // Dispatch AUTH_ERROR
  return { type };
};

export const signIn = ({ email, password }) => {
  return (dispatch) => {
    postSignInWrapped({ email, password })
      .then((response) => {
        // Check login, token missing
        if (!response.data.token) {
          dispatch(authError(AUTH_ERROR));
        // Check login, token found
        } else {
          // Dispatch AUTH event
          dispatch({ type: AUTH_USER });
          // Save token to local storage
          localStorage.setItem('auth_token', response.data.token);
          // Redirect to protected route
          browserHistory.push('/feature');
        }
      })
      .catch(() => {
        dispatch(authError(AUTH_ERROR));
      })
    ;
  };
};

export const signUp = ({ email, password }) => {
  return (dispatch) => {
    postSignUpWrapped({ email, password })
      .then((response) => {
        // Check login, token missing
        if (!response.data.token) {
          dispatch(authError(SIGNUP_ERROR));
        // Check login, token found
        } else {
          // Dispatch AUTH event
          dispatch({ type: SIGNUP_USER });
          // Save token to local storage
          localStorage.setItem('auth_token', response.data.token);
          // Redirect to protected route
          browserHistory.push('/feature');
        }
      })
      .catch(() => {
        dispatch(authError(SIGNUP_ERROR));
      })
    ;
  };
};

export const signOut = () => {
  // Clear auth_token from LS
  localStorage.removeItem('auth_token');
  return {
    type: UNAUTH_USER
  }
};
