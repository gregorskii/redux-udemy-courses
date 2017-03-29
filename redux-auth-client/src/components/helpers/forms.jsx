import React from 'react';
import classNames from 'classnames';
import isEmail from 'validator/lib/isEmail';

/* eslint-disable react/prop-types */
export const renderField = ({ input, label, type, meta: { touched, error, warning } }) => {
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

export const required = (value) => {
  if (value) {
    return undefined;
  }
  return 'Required';
};

export const isEmailValidator = (v) => {
  if (isEmail(v)) {
    return undefined;
  }
  return 'Valid email required';
};
