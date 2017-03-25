import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import promise from 'redux-promise';

import AppRouter from './routes';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.querySelector('.container')
);
