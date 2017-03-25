import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Provider } from 'react-redux';

import store from 'src/store';
import CommentList from '.';

const stories = storiesOf('CommentList', module);

stories.addDecorator(getStory => (
  <Provider store={store}>
    { getStory() }
  </Provider>
));

stories.add('CommentList', () => {
  return (
    <CommentList />
  );
});
