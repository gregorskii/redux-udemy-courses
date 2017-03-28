/* eslint-disable func-names, prefer-arrow-callback */

import React from 'react';
import { mount } from 'enzyme';

import Home from 'pages/home';
import Landing from 'components/landing';
import { Provider } from 'react-redux';
import store from 'src/store';

describe('Home', function() {
  describe('rendering', function() {
    beforeEach(function() {
      this.wrapper = mount(
        <Provider store={store}>
          <Landing />
        </Provider>
      );
    });

    it('should contain the Landing component', function() {
      expect(this.wrapper).to.contain(<Landing />);
    });
  });
});
