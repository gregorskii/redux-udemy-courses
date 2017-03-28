import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { withKnobs, text } from '@kadira/storybook-addon-knobs';

import Landing from './index.jsx';
const stories = storiesOf('Landing', module);

stories.addDecorator(withKnobs);

stories.add('Landing', () => {
  return <Landing landingText={text('Text', 'Landing!!')} />;
});
