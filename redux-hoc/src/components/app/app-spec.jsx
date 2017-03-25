/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { shallow } from 'enzyme';

import App from 'components/app';
import Header from 'components/header';

describe('App', function() {
  describe('rendering', function() {
    it('should be defined', function() {
      const wrapper = shallow(<App />);

      expect(wrapper).be.present();
    });

    it('should contain a header component', function() {
      const wrapper = shallow(<App />);

      expect(wrapper).to.contain(<Header />);
    });
  });
});
