import React from 'react';
import {
  Route,
  IndexRoute,
  Router,
  browserHistory
} from 'react-router';

import App from 'components/app';
import Home from 'pages/home';
import Signup from 'pages/signup';
import Signout from 'pages/signout';
import Feature from 'pages/feature';

const AppRouter = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/signout" component={Signout} />
        <Route path="/feature" component={Feature} />
      </Route>
    </Router>
  );
};

export default AppRouter;
