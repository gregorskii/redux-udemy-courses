import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';

import AuthReducer from 'reducers/auth';
import PostsReducer from 'reducers/posts';

const rootReducer = combineReducers({
  form: FormReducer,
  auth: AuthReducer,
  posts: PostsReducer
});

export default rootReducer;
