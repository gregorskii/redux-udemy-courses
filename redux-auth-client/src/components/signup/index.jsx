import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ACTIONS from 'actions';
import SignupForm from 'components/signup-form';
import styles from './signup.scss';

const { signUp } = ACTIONS;

class Signup extends Component {
  static propTypes = {
    signUp: PropTypes.func.isRequired,
    signUpError: PropTypes.bool,
    signUpErrorReason: PropTypes.string
  }

  static defaultProps = {
    signUpError: false,
    signUpErrorReason: ''
  }

  constructor(props) {
    super(props);

    this.onSignUpSubmit = this.onSignUpSubmit.bind(this);
  }

  onSignUpSubmit(fields) {
    this.props.signUp(fields);
  }

  render() {
    const signUpErrorMessage = (
      <div className="text-danger mt-3">
        Failed to Signup: {this.props.signUpErrorReason}!
      </div>
    );

    return (
      <section className={styles.signup}>
        <h2>Sign up</h2>
        <p>Our service provides great things, create an account below.</p>
        <SignupForm onSubmit={this.onSignUpSubmit} />
        { this.props.signUpError ? signUpErrorMessage : null }
      </section>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    signUpError: auth.signupError,
    signUpErrorReason: auth.reason
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ signUp }, dispatch);
};

export const SignupComponent = Signup;

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
