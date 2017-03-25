import ACTIONS from '../actions';

const { APP_INIT } = ACTIONS;

const INITIAL_STATE = { all: [] };

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case APP_INIT:
      return { ...state, all: action.payload.users };
    default:
      return state;
  }
};
