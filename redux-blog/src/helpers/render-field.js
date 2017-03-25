import React from 'react';
import classNames from 'classnames';

export default ({ input, label, type, meta: { touched, error, warning } }) => {
  let field;

  const classControl = classNames({
    'form-group': true,
    'has-danger': touched && !warning && error !== undefined,
    'has-warning': touched && warning !== undefined
  });

  const classLabel = classNames({
    'form-control-label': true
  });

  const classField = classNames({
    'form-control': true,
    'form-control-danger': touched && !warning && error !== undefined,
    'form-control-warning': touched && warning !== undefined
  });

  const classFeedback = classNames({
    'form-control-feedback': true,
    'hidden': touched && (error === undefined && warning === undefined)
  });

  if (type === 'textarea') {
    field = (
      <textarea {...input}
        className={classField} />
    );
  } else if (type === 'text') {
    field = (
      <input {...input}
        type={type}
        className={classField} />
    );
  }

  return (
    <div className={classControl}>
      <label
        className={classLabel}
        htmlFor={name}>{label}</label>

      {field}

      {touched && ((error && <span className={classFeedback}>{error}</span>))}
      {touched && ((warning && <span className={classFeedback}>{warning}</span>))}
    </div>
  );
};
