import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ACTIONS from 'actions';
import SignupForm from 'components/signup-form';
import styles from './signup.scss';

const { signUp } = ACTIONS;

class Signup extends Component {
  static propTypes = {
    signUp: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

    this.onSignUpSubmit = this.onSignUpSubmit.bind(this);
  }

  onSignUpSubmit(fields) {
    this.props.signUp(fields);
  }

  render() {
    return (
      <section className={styles.signup}>
        <h2>Sign up</h2>
        <p>Our service provides great things, create an account below.</p>
        <SignupForm onSubmit={this.onSignUpSubmit} />
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ signUp }, dispatch);
};

export const SignupComponent = Signup;

export default connect(null, mapDispatchToProps)(Signup);
