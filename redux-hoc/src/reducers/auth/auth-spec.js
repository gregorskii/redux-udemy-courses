/* eslint-disable func-names, prefer-arrow-callback */

import * as AUTH_ACTIONS from 'actions/auth';
import AuthReducer from '.';

const {
  CHANGE_AUTH
} = AUTH_ACTIONS;

const testLogin = true;

describe('Auth Reducer', function() {
  it('should handle unknown action type', function() {
    const state = AuthReducer(undefined, {
      type: 'unknown'
    });

    expect(state).to.eql(false);
  });

  it(`should handle ${CHANGE_AUTH} action type`, function() {
    const action = {
      type: CHANGE_AUTH,
      payload: testLogin
    };

    const state = AuthReducer(undefined, action);

    expect(state).to.eql(testLogin);
  });
});
