import React from 'react';
import {
  Route,
  IndexRoute,
  Router,
  browserHistory
} from 'react-router';

import App from 'components/app';
import Home from 'pages/home';
import init from 'api/init';

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
