import React from 'react';
import classNames from 'classnames';

const RequestResult = (props) => {
  const alertClasses = classNames({
    'postlist__alert': true,
    'alert': true,
    'alert-success': props.success === true,
    'alert-danger': props.success === false
  });

  const result = (
    <div className={alertClasses} role="alert">
      <p>{props.success === true ? props.successMessage : props.errorMessage}</p>
    </div>
  );

  return result;
}

export default RequestResult;
