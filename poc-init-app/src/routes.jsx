import React from 'react';
import {
  Route,
  IndexRoute,
  Router,
  browserHistory
} from 'react-router';

import init from './api/init';
import App from './components/app';
import Home from './pages/home';

const AppRouter = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App} onEnter={init}>
        <IndexRoute component={Home} />
      </Route>
    </Router>
  );
};

export default AppRouter;
