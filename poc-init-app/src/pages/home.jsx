import React from 'react';

import UserList from '../containers/user-list';
import PhotoList from '../containers/photo-list';

const Home = () => {
  return (
    <div>
      <PhotoList />
      <hr />
      <UserList />
    </div>
  )
}

export default Home;
