/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { mount } from 'enzyme';

import { Provider } from 'react-redux';

import store from 'src/store';
import CommentList, { CommentListComponent } from 'components/comment-list';

const mockComments = [
  'A Comment',
  'Another Comment'
];

const placeholderText = 'Add some comments!';

describe('CommentList', function() {
  describe('connected', function() {
    beforeEach(function() {
      this.wrapper = mount(
        <Provider store={store}>
          <CommentList />
        </Provider>
      );
    });

    it('should render as a connected component inside a provider', function() {
      expect(this.wrapper.contains(<CommentList />)).to.equal(true);
    });
  });

  describe('rendering', function() {
    beforeEach(function() {
      this.wrapper = mount(<CommentListComponent comments={mockComments} />);
    });

    it('should have the correct className', function() {
      expect(this.wrapper.find(CommentListComponent)).to.have.className('comment-list');
    });

    it('should render a comment list', function() {
      expect(this.wrapper.find(CommentListComponent).find('ul.list-group')).to.be.present();
    });

    it('should show an element for each comment provided', function() {
      expect(this.wrapper.find('li').length).to.equal(mockComments.length);
    });

    it('should show each comment that was provided', function() {
      mockComments.forEach((comment, index) => {
        expect(this.wrapper.find('li').at(index).text()).to.equal(comment);
      });
    });
  });

  describe('render when no comments are passed', function() {
    beforeEach(function() {
      this.wrapper = mount(
        <CommentListComponent comments={[]} placeholderText={placeholderText} />
      );
    });

    it('should render a single placeholder element', function() {
      expect(this.wrapper.find('li').length).to.equal(1);
    });

    it('should render placeholder text in the first li', function() {
      expect(this.wrapper.find('li').text()).to.equal(placeholderText);
    });
  });
});
