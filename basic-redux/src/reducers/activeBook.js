// State argument is not application state, only the state this reducer is
// responsible for
// state=null defaults state to null if not passed
export default (state = null, action) => {
  // If action type is BOOK_SELECTED return actions payload
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }

  // Case where reducer does not care about the action
  return state;
}
