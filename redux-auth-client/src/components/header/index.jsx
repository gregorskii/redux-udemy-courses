import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

import SigninForm from 'components/sign-in-form';
import ACTIONS from 'actions';

const { signIn } = ACTIONS;

class Header extends Component {
  static propTypes = {
    signIn: PropTypes.func.isRequired,
    auth: PropTypes.shape().isRequired
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
      <ul className="nav navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/signup">Sign Up</Link>
        </li>
      </ul>
    );

    const signInForm = (
      <SigninForm onSubmit={this.onSignInSubmit} />
    );

    const signOut = (
      <ul className="nav navbar-nav">
        <li className="nav-item">
          <a className="nav-link">Sign Out</a>
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <Link className="navbar-brand" to="/">Redux Auth</Link>
        <ul className="nav navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link">Cats</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Dogs</a>
          </li>
        </ul>
        { this.props.auth.authenticated ? null : signUp }
        { this.props.auth.authenticated ? null : signInForm }
        { this.props.auth.authenticated ? signOut : null }
      </nav>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ signIn }, dispatch);
};

export const HeaderComponent = Header;

export default connect(mapStateToProps, mapDispatchToProps)(Header);
