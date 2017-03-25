import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';

import PostReducer from './posts';

const rootReducer = combineReducers({
  posts: PostReducer,
  form: FormReducer
});

export default rootReducer;
