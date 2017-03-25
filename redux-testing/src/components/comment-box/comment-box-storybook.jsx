import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { withKnobs, text } from '@kadira/storybook-addon-knobs';
import { Provider } from 'react-redux';
// import { specs } from 'storybook-addon-specifications';

import store from 'src/store';
import CommentBox from '.';
// import tests from './comment-box-storybook';

const stories = storiesOf('CommentBox', module);

stories.addDecorator(withKnobs);

stories.addDecorator(getStory => (
  <Provider store={store}>
    { getStory() }
  </Provider>
));

stories.add('CommentBox', () => {
  // specs(() => tests);

  return (
    <CommentBox
      labelText={text('Label Text', 'Comment')}
    />
  );
});
