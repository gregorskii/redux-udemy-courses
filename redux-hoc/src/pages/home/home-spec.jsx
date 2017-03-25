/* eslint-disable func-names, prefer-arrow-callback */

import React from 'react';
import { mount } from 'enzyme';

import Home from 'pages/home';
import Welcome from 'components/welcome';
import { Provider } from 'react-redux';
import store from 'src/store';

describe('Home', function() {
  it('should contain the Home component', function() {
    const wrapper = mount(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    expect(wrapper).to.contain(<Home />);
  });

  it('should contain the Welcome component', function() {
    const wrapper = mount(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    expect(wrapper).to.contain(<Welcome />);
  });
});
