/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import * as AUTH_ACTIONS from '.';

const {
  CHANGE_AUTH,
  authenticate
} = AUTH_ACTIONS;

const testLogin = true;

describe('Auth Actions', function() {
  describe('authenticate action', function() {
    beforeEach(function() {
      this.action = authenticate(testLogin);
    });

    it('has the correct action type', function() {
      expect(this.action.type).to.equal(CHANGE_AUTH);
    });

    it('has the correct action payload', function() {
      expect(this.action.payload).to.equal(testLogin);
    });
  });
});
