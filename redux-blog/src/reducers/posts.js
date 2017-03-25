import ACTIONS from '../actions';

const {
  CREATE_POST,
  FETCH_POSTS,
  GET_POST,
  DELETE_POST
} = ACTIONS;

const INITIAL_STATE = { all: [], post: null };

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_POSTS:
      return { ...state, all: action.payload.data };
    case CREATE_POST:
      return { ...state, all: [ ...state.all, action.payload.data ] };
    case GET_POST:
      return { ...state, post: action.payload.data };
    case DELETE_POST:
      return { ...state };
    default:
      return state;
  }
};
