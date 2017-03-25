import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Header from './index.jsx';

const stories = storiesOf('Header', module);

stories.add('Header', () => {
  return <Header />;
});
