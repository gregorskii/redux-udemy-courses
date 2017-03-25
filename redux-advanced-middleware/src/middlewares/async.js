export default ({ dispatch }) => {
  return next => (action) => {
    // If the action does not have a payload or a .then call next
    if (!action.payload || !action.payload.then) {
      next(action);
    } else {
      action.payload.then(
        (result) => {
          // Create new action with the same content of action, replace promise with response
          dispatch({ ...action, payload: result });
        })
      ;
    }
  };
};
