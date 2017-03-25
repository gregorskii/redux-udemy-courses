import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { withKnobs, text } from '@kadira/storybook-addon-knobs';
// import { specs } from 'storybook-addon-specifications';

import Welcome from './index.jsx';
// import tests from './welcome-spec';

// console.log(specs, tests);

const stories = storiesOf('Welcome', module);

stories.addDecorator(withKnobs);

stories.add('Welcome', () => {
  // specs(() => tests);

  return <Welcome welcomeText={text('Text', 'Welcome to Storybook!')} />;
});
