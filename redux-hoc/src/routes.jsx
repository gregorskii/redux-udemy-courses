import React from 'react';
import {
  Route,
  IndexRoute,
  Router,
  browserHistory
} from 'react-router';

import App from './components/app';
import Home from './pages/home';
import Resources from './pages/resources';

const AppRouter = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="resources" component={Resources} />
      </Route>
    </Router>
  );
};

export default AppRouter;
