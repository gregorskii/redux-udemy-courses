import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { withKnobs, text } from '@kadira/storybook-addon-knobs';

import Welcome from '.';

const stories = storiesOf('Welcome', module);

stories.addDecorator(withKnobs);

stories.add('Welcome', () => {
  return <Welcome welcomeText={text('Text', 'Welcome to Storybook!')} />;
});
