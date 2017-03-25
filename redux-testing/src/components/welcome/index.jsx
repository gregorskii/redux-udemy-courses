import React, { PropTypes } from 'react';

const Welcome = (props) => {
  return (
    <div>{props.welcomeText}</div>
  );
};

Welcome.propTypes = {
  welcomeText: PropTypes.string
};

Welcome.defaultProps = {
  welcomeText: 'Welcome!'
};

export default Welcome;
