import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createStorybookListener from 'storybook-addon-redux-listener';
import promise from 'redux-promise';
import reduxThunk from 'redux-thunk';

import Reducers from 'reducers';
import Actions from 'actions';

const middlewares = [promise, reduxThunk];

if (process.env.NODE_ENV === 'storybook') {
  const reduxListener = createStorybookListener();
  middlewares.push(reduxListener);
}

const createStoreWithMiddleware = (reducers) => {
  return createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middlewares))
  );
};

const store = createStoreWithMiddleware(Reducers);

const token = localStorage.getItem('auth_token');

// If we have the token consider the user logged in
if (token) {
  // Dispatch an event to update the application state
  store.dispatch({
    type: Actions.AUTH_USER
  });
}

export default store;
