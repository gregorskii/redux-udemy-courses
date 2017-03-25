import React from 'react';
import { storiesOf } from '@kadira/storybook';

import UserList from './index.jsx';

const stories = storiesOf('UserList', module);

stories.add('UserList', () => {
  return <UserList />;
});
