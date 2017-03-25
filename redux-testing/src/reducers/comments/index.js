import ACTIONS from 'src/actions';

const {
  ADD_COMMENT
} = ACTIONS;

const INITIAL_STATE = { all: [] };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return { ...state, all: [...state.all, action.payload.text] };
    default:
      return INITIAL_STATE;
  }
};
