import { combineReducers } from 'redux';

import ConfigReducer from './config';
import UsersReducer from './users';
import PhotosReducer from './photos';

const rootReducer = combineReducers({
  config: ConfigReducer,
  users: UsersReducer,
  photos: PhotosReducer
});

export default rootReducer;
