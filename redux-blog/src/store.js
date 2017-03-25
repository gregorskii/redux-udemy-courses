import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import promise from 'redux-promise';

import Reducers from './reducers';

const createStoreWithMiddleware = (reducers) => {
  return createStore(
    reducers,
    composeWithDevTools(applyMiddleware(promise))
  );
}

const store = createStoreWithMiddleware(Reducers);

export default store;
