import ACTIONS from 'actions';

const {
  SIGN_IN
} = ACTIONS;

const INITIAL_STATE = {
  authenticated: false,
  error: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state };
    default:
      return state;
  }
};
