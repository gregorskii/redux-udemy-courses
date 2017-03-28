import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import classNames from 'classnames';
import isEmail from 'validator/lib/isEmail';

/* eslint-disable react/prop-types */
const renderField = ({ input, label, type, meta: { touched, error, warning } }) => {
  const classControl = classNames({
    'form-group': true,
    'has-danger': touched && !warning && error !== undefined,
    'has-warning': touched && warning !== undefined
  });

  const classField = classNames({
    'form-control': true,
    'mr-sm-1': true,
    'form-control-danger': touched && !warning && error !== undefined,
    'form-control-warning': touched && warning !== undefined
  });

  return (
    <div className={classControl}>
      <input
        {...input}
        type={type}
        className={classField}
        placeholder={label}
      />
    </div>
  );
};
/* eslint-enable react/prop-types */

const SigninFormComponent = (props) => {
  const { handleSubmit, pristine, submitting } = props;
  const required = (value) => {
    if (value) {
      return undefined;
    }
    return 'Required';
  };

  const isEmailValidator = (v) => {
    if (isEmail(v)) {
      return undefined;
    }
    return 'Valid email required';
  };

  return (
    <form
      className="sign-in-form form-inline justify-content-end"
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
