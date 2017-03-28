/* eslint-disable func-names, prefer-arrow-callback */

import React from 'react';
import { shallow } from 'enzyme';

import Landing from 'components/landing';

// Use describe to group similar tests
describe('Landing', function() {
  describe('rendering', function() {
    beforeEach(function() {
      this.wrapper = shallow(<Landing />);
    });

    // Use 'it' to test a single attribute of a target
    it('should show the correct text', function() {
      // Use expect to make an assertion about a target
      expect(this.wrapper.find('div')).to.have.text('Landing!');
    });
  });
});
