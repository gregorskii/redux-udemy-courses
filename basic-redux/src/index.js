import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './components/app';
import Reducers from './reducers';

const createStoreWithMiddleware = (reducers) => {
  return createStore(
    reducers,
    composeWithDevTools(applyMiddleware())
  );
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(Reducers)}>
    <App />
  </Provider>,
  document.querySelector('.container')
);
