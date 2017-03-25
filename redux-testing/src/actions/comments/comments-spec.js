/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import * as COMMENT_ACTIONS from '.';

const {
  ADD_COMMENT,
  addComment
} = COMMENT_ACTIONS;

const testComment = 'a comment';

describe('Comments Actions', function() {
  describe('addComment action', function() {
    beforeEach(function() {
      this.action = addComment(testComment);
    });

    it('has the correct action type', function() {
      expect(this.action.type).to.equal(ADD_COMMENT);
    });

    it('has the correct action payload', function() {
      expect(this.action.payload).to.have.ownProperty('text');
      expect(this.action.payload.text).to.equal(testComment);
    });
  });
});
