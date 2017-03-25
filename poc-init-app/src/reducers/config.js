import ACTIONS from '../actions';
import config from '../config';

const { APP_INIT, CHANGE_APP_CONFIG } = ACTIONS;

const INITIAL_STATE = { ...config };

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case APP_INIT:
      return { ...state };
    case CHANGE_APP_CONFIG:
      return { ...state, ...action.payload }
    default:
      return state;
  }
};
