import ACTIONS from 'actions';

const { FETCH_USERS } = ACTIONS;

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return [...state, ...action.payload.data];
    default:
      return state;
  }
};
