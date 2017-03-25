import { combineReducers } from 'redux';

import CommentsReducer from 'reducers/comments';

const rootReducer = combineReducers({
  comments: CommentsReducer
});

export default rootReducer;
