import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

import {
  renderField,
  isEmailValidator,
  required
} from 'components/helpers/forms';

const SignupFormComponent = (props) => {
  const { handleSubmit, pristine, submitting } = props;

  return (
    <form
      className="sign-up-form"
      onSubmit={handleSubmit}
    >
      <Field
        name="email"
        type="text"
        label="Email"
        component={renderField}
        validate={[required, isEmailValidator]}
      />
      <Field
        name="password"
        type="Password"
        label="Password"
        component={renderField}
        validate={required}
      />
      <Field
        name="password_confirm"
        type="password"
        label="Confirm Password"
        component={renderField}
        validate={required}
      />
      <button
        className="btn btn-outline-success"
        type="submit"
        disabled={pristine || submitting}
      >Sign Up</button>
    </form>
  );
};

SignupFormComponent.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired
};

const SignupForm = reduxForm({
  form: 'signUp'
})(SignupFormComponent);

export default SignupForm;
