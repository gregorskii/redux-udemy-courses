import React from 'react';
import { storiesOf } from '@kadira/storybook';

import ResourceList from './index.jsx';

const stories = storiesOf('ResourceList', module);

stories.add('ResourceList', () => {
  return <ResourceList />;
});
