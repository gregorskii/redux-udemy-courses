/* eslint-disable func-names, prefer-arrow-callback */

import React from 'react';
import { shallow } from 'enzyme';

import ResourceList from 'components/resource-list';

describe('ResourceList', function() {
  describe('rendering', function() {
    beforeEach(function() {
      this.wrapper = shallow(<ResourceList />);
    });

    it('should contain a section with className resource-list', function() {
      expect(this.wrapper.find('section')).to.have.className('resource-list');
    });
  });
});
