import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createStorybookListener from 'storybook-addon-redux-listener';
// Removing redux-promise to make custom
// import promise from 'redux-promise';

import Reducers from 'reducers';
import Async from 'middlewares/async';

// Never make assumptions about what order middleware runs in.

// const middlewares = [promise];
const middlewares = [Async];

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

export default store;
