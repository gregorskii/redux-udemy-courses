import { browserHistory } from 'react-router';
import API from 'api';

const { postSignInWrapped } = API;

export const AUTH_USER = 'AUTH_USER';
export const UNAUTH_USER = 'UNAUTH_USER';
export const AUTH_ERROR = 'AUTH_ERROR';

export const authError = () => {
  // Clear auth_token from LS
  localStorage.removeItem('auth_token');
  return { type: AUTH_ERROR };
};

export const signIn = ({ email, password }) => {
  return (dispatch) => {
    postSignInWrapped({ email, password })
      .then((response) => {
        // Check login, token missing
        if (!response.data.token) {
          dispatch(authError());
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
        dispatch(authError());
      })
    ;
  };
};
