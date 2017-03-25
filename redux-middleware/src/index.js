import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxPromise from 'redux-promise';
import * as storage from 'redux-storage';
import createEngine from 'redux-storage-engine-localstorage';

import App from './components/app';
import Reducers from './reducers';

const engine = createEngine('weatherApp');
const StorageMiddleware = storage.createMiddleware(engine);

const createStoreWithMiddleware = (reducers) => {
  return createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...[ReduxPromise, StorageMiddleware]))
  );
}

const store = createStoreWithMiddleware(Reducers);
const load = storage.createLoader(engine);

load(store).then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector('.container')
  );
});
