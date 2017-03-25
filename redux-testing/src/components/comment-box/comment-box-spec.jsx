/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import { Provider } from 'react-redux';

import CommentBox, { CommentBoxComponent } from 'components/comment-box';
import store from 'src/store';

describe('CommentBox', function() {
  describe('render connected', function() {
    beforeEach(function() {
      this.wrapper = mount(
        <Provider store={store}>
          <CommentBox />
        </Provider>
      );
    });

    it('should render as a connected component inside a provider', function() {
      expect(this.wrapper.contains(<CommentBox />)).to.equal(true);
    });

    // it('should have the props provided by the provider', function() {
    //   expect(this.wrapper.find(<CommentBox />));
    // });
  });

  describe('rendering', function() {
    beforeEach(function() {
      this.addCommentSpy = spy();
      this.wrapper = mount(<CommentBoxComponent addComment={this.addCommentSpy} />);
    });

    it('should have the correct className', function() {
      expect(this.wrapper.find(CommentBoxComponent)).to.have.className('comment-box');
    });

    it('should have a text area', function() {
      expect(this.wrapper.find('textarea.comment-box__textarea')).be.present();
    });

    it('should have a label', function() {
      expect(this.wrapper.find('label.comment-box__label')).be.present();
    });

    it('should have a button', function() {
      expect(this.wrapper.find('button.comment-box__submit')).be.present();
    });
  });

  describe('text entry', function() {
    const testValue = 'Some Text';

    beforeEach(function() {
      this.addCommentSpy = spy();
      this.wrapper = mount(<CommentBoxComponent addComment={this.addCommentSpy} />);
      this.textarea = this.wrapper.find('textarea.comment-box__textarea');
      this.form = this.wrapper.find('form.comment-box__form');
    });

    it('should show entered text', function() {
      // simulate wont change the value unless you have a onChange event
      this.textarea.simulate('change',
        { target: { value: testValue } }
      );

      // changes value directly without event
      // this.textarea.node.value = testValue;

      expect(this.textarea.node.value).to.equal(testValue);
    });

    it('should trigger action method', function() {
      this.textarea.simulate('change',
        { target: { value: testValue } }
      );

      this.form.simulate('submit');

      expect(this.addCommentSpy).to.have.been.calledWith(testValue);
    });

    it('should clear the text when submitted', function() {
      this.textarea.simulate('change',
        { target: { value: testValue } }
      );

      this.form.simulate('submit');

      expect(this.textarea.node.value).to.equal('');
    });
  });
});
