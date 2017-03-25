import React from 'react';
import {
  Route,
  IndexRoute,
  Router,
  browserHistory
} from 'react-router';

import App from './components/app';
import PostIndex from './components/post-index';
import PostCreate from './components/post-create';
import PostShow from './components/post-show';

const AppRouter = () => {
  // nested routes component are passed to parent as this.props.children
  // index route shows whenever a route matches the root, but not any of the children
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={PostIndex} />
        <Route path="/posts/new" component={PostCreate}></Route>
        <Route path="/posts/:id" component={PostShow}></Route>
      </Route>
    </Router>
  );
};

export default AppRouter;
