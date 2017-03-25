/* eslint-disable func-names, prefer-arrow-callback */

import React from 'react';
import { mount } from 'enzyme';

import Home from 'pages/home';
import CommentBox from 'components/comment-box';
import CommentList from 'components/comment-list';
import { Provider } from 'react-redux';
import store from 'src/store';

describe('Home', function() {
  it('should contain the CommentBox component', function() {
    const wrapper = mount(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    expect(wrapper).to.contain(<CommentBox />);
  });

  it('should contain the CommentList component', function() {
    const wrapper = mount(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    expect(wrapper).to.contain(<CommentList />);
  });
});
