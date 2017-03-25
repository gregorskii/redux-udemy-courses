import React from 'react';

import CommentBox from 'components/comment-box';
import CommentList from 'components/comment-list';

const Home = () => {
  return (
    <section>
      <CommentBox />
      <CommentList />
    </section>
  );
};

export default Home;
