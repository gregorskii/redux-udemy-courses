import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

import ACTIONS from 'actions';

const { authenticate } = ACTIONS;

class Header extends Component {
  static propTypes = {
    authenticate: PropTypes.func.isRequired,
    authenticated: PropTypes.bool
  };

  static defaultProps = {
    authenticated: false
  }

  authButton() {
    if (this.props.authenticated) {
      return (
        <button
          className="authentication-button btn btn-primary"
          onClick={() => this.props.authenticate(false)}
        >Sign Out</button>
      );
    }

    return (
      <button
        className="authentication-button btn btn-primary"
        onClick={() => this.props.authenticate(true)}
      >Sign In</button>
    );
  }

  render() {
    return (
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/resources">Resources</Link>
          </li>
          <li className="nav-item">
            {this.authButton()}
          </li>
        </ul>
      </nav>
    );
  }
}

export const HeaderComponent = Header;

const mapStateToProps = ({ auth }) => {
  return { authenticated: auth };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ authenticate }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
