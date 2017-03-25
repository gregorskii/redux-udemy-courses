/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import * as COMMENT_ACTIONS from 'src/actions/comments';
import CommentsReducer from '.';

const {
  ADD_COMMENT
} = COMMENT_ACTIONS;

const testComment = 'a comment';

describe('Comments Reducer', function() {
  it('should handle unknown action type', function() {
    const state = CommentsReducer(undefined, {
      type: 'unknown'
    });

    expect(state).to.be.instanceOf(Object);
    expect(state).to.eql({ all: [] });
  });

  it(`should handle ${ADD_COMMENT} action type`, function() {
    const action = {
      type: ADD_COMMENT,
      payload: {
        text: testComment
      }
    };

    const state = CommentsReducer(undefined, action);

    expect(state).to.eql({ all: [testComment] });
  });
});
