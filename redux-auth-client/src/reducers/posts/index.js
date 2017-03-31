import ACTIONS from 'actions';

const { GET_POSTS } = ACTIONS;

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_POSTS:
      return action.payload.data.posts;
    default:
      return state;
  }
};
