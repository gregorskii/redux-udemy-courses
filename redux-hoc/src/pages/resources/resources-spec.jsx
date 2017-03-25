/* eslint-disable func-names, prefer-arrow-callback */

import React from 'react';
import { mount } from 'enzyme';
import { stub } from 'sinon';

import { ResourcesComponent } from 'pages/resources';

describe('Resources', function() {
  it('should contain the Resources component', function() {
    const context = {
      router: { push: stub() }
    };

    const wrapper = mount(<ResourcesComponent />, { context });

    expect(wrapper).to.contain(<ResourcesComponent />);
  });
});
