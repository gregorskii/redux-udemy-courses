import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

import {
  renderField,
  isEmailValidator,
  required
} from 'components/helpers/forms';

const renderFieldFn = renderField(false);

const SigninFormComponent = (props) => {
  const { handleSubmit, pristine, submitting } = props;

  return (
    <form
      className="sign-in-form form-inline justify-content-end"
      onSubmit={handleSubmit}
    >
      <Field
        name="email"
        type="text"
        label="Email"
        component={renderFieldFn}
        validate={[required, isEmailValidator]}
      />
      <Field
        name="password"
        type="Password"
        label="Password"
        component={renderFieldFn}
        validate={required}
      />
      <button
        className="btn btn-outline-success my-2 my-sm-0"
        type="submit"
        disabled={pristine || submitting}
      >Sign In</button>
    </form>
  );
};

SigninFormComponent.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired
};

const SigninForm = reduxForm({
  form: 'signIn'
})(SigninFormComponent);

export default SigninForm;
