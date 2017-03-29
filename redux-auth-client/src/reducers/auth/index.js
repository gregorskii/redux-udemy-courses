import ACTIONS from 'actions';

const {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  SIGNUP_USER,
  SIGNUP_ERROR
} = ACTIONS;

const INITIAL_STATE = {
  authenticated: false,
  error: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGNUP_USER:
    case AUTH_USER:
      return { ...state, authenticated: true, error: false };
    case UNAUTH_USER:
      return { ...state, authenticated: false, error: false };
    case AUTH_ERROR:
      return { ...state, authenticated: false, error: true };
    case SIGNUP_ERROR:
      return { ...state, authenticated: false, error: true };
    default:
      return { ...state };
  }
};
