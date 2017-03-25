/* eslint-disable func-names, prefer-arrow-callback */

import React from 'react';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import { Provider } from 'react-redux';

import Header, { HeaderComponent } from 'components/Header';
import store from 'store';

describe('Header', function() {
  describe('connected', function() {
    beforeEach(function() {
      this.wrapper = mount(
        <Provider store={store}>
          <Header />
        </Provider>
      );
    });

    it('should render as a connected component inside a provider', function() {
      expect(this.wrapper.contains(<Header />)).to.equal(true);
    });
  });

  describe('rendering', function() {
    beforeEach(function() {
      this.authenticateSpy = spy();
      this.wrapper = mount(
        <HeaderComponent
          authenticate={this.authenticateSpy}
          authenticated={false}
        />
      );
    });

    it('should contain a nav with className navbar', function() {
      expect(this.wrapper.find('nav')).to.have.className('navbar');
    });

    it('should contain a ul', function() {
      expect(this.wrapper.find('ul')).to.be.present();
    });

    it('should contain at least one li', function() {
      expect(this.wrapper.find('ul')).to.descendants('li');
    });
  });

  describe('actions', function() {
    beforeEach(function() {
      this.authenticateSpy = spy();
    });

    it('should fire the correct action when sign in is clicked', function() {
      this.wrapper = mount(
        <HeaderComponent
          authenticate={this.authenticateSpy}
        />
      );

      this.wrapper.find('button').simulate('click');

      expect(this.authenticateSpy).to.have.been.calledWith(true);
    });

    it('should fire the correct action when sign out is clicked', function() {
      this.wrapper = mount(
        <HeaderComponent
          authenticate={this.authenticateSpy}
          authenticated
        />
      );

      this.wrapper.find('button').simulate('click');

      expect(this.authenticateSpy).to.have.been.calledWith(false);
    });
  });

  describe('authenticated states', function() {
    it('should show logged in state when passed authenticated true', function() {
      const wrapper = mount(
        <HeaderComponent
          authenticate={this.authenticateSpy}
          authenticated={false}
        />
      );

      expect(wrapper.find('.authentication-button').text()).to.equal('Sign In');
    });

    it('should show logged in state when passed authenticated true', function() {
      const wrapper = mount(
        <HeaderComponent
          authenticate={this.authenticateSpy}
          authenticated
        />
      );

      expect(wrapper.find('.authentication-button').text()).to.equal('Sign Out');
    });
  });
});
