import ACTIONS from 'actions';

const {
  CHANGE_AUTH
} = ACTIONS;

const defaultState = false;

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_AUTH:
      return action.payload;
    default:
      return state;
  }
};
