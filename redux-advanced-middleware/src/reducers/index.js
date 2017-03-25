import { combineReducers } from 'redux';

import UsersReducer from 'reducers/users';

const rootReducer = combineReducers({
  users: UsersReducer
});

export default rootReducer;
