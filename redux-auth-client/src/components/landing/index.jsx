import React, { PropTypes } from 'react';

const Landing = (props) => {
  return (
    <div>{props.landingText}</div>
  );
};

Landing.propTypes = {
  landingText: PropTypes.string
};

Landing.defaultProps = {
  landingText: 'Landing!'
};

export default Landing;
