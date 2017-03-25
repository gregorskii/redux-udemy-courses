/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { shallow } from 'enzyme';

import App from 'components/app';

// Use describe to group similar tests
describe('App', function() {
  // Use 'it' to test a single attribute of a target
  it('should be defined', function() {
    // Use expect to make an assertion about a target
    const wrapper = shallow(<App />);

    expect(wrapper).be.present();
  });
});
