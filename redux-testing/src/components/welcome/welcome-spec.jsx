/* eslint-disable func-names, prefer-arrow-callback */

import React from 'react';
import { shallow } from 'enzyme';

import Welcome from 'components/welcome';

// Use describe to group similar tests
describe('Welcome', function() {
  // Use 'it' to test a single attribute of a target
  it('should show the correct text', function() {
    // Use expect to make an assertion about a target
    const wrapper = shallow(<Welcome />);

    expect(wrapper.find('div')).to.have.text('Welcome!');
  });
});
