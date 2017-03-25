import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Provider } from 'react-redux';

import store from 'src/store';
import Home from '.';

const stories = storiesOf('Home', module);

stories.addDecorator(getStory => (
  <Provider store={store}>
    { getStory() }
  </Provider>
));

stories.add('Home', () => {
  return (
    <Home />
  );
});
