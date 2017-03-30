import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

import SigninForm from 'components/signin-form';
import ACTIONS from 'actions';

const { signIn } = ACTIONS;

class Header extends Component {
  static propTypes = {
    signIn: PropTypes.func.isRequired,
    authenticated: PropTypes.bool.isRequired,
    authError: PropTypes.bool.isRequired
  }

  constructor(props) {
    super(props);

    this.onSignInSubmit = this.onSignInSubmit.bind(this);
  }

  onSignInSubmit(fields) {
    this.props.signIn(fields);
  }

  render() {
    const signUp = (
      <ul className="header nav navbar-nav">
        <li className="nav-item">
          <Link className="signup nav-link" to="/signup">Sign Up</Link>
        </li>
      </ul>
    );

    const signInError = (
      <span className="navbar-text text-danger ml-sm-2">
        Bad Login Info
      </span>
    );

    const signInForm = (
      <SigninForm onSubmit={this.onSignInSubmit} />
    );

    const signOutButton = (
      <ul className="nav navbar-nav">
        <li className="nav-item">
          <Link
            to="/signout"
            className="nav-link btn btn-outline-danger"
          >Sign Out</Link>
        </li>
      </ul>
    );

    const protectedLinks = (
      <li className="nav-item">
        <Link className="navbar-brand" to="/feature">Feature</Link>
      </li>
    );

    return (
      <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <Link className="navbar-brand" to="/">Redux Auth</Link>
        <ul className="nav navbar-nav mr-auto">
          { this.props.authenticated ? protectedLinks : null }
        </ul>
        { this.props.authenticated ? null : signUp }
        { this.props.authenticated ? null : signInForm }
        { this.props.authError ? signInError : null }
        { this.props.authenticated ? signOutButton : null }
      </nav>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    authenticated: auth.authenticated,
    authError: auth.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ signIn }, dispatch);
};

export const HeaderComponent = Header;

export default connect(mapStateToProps, mapDispatchToProps)(Header);
