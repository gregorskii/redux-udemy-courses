import React from 'react';

import 'styles/style.scss';

const App = (props) => {
  return (
    <div>
      {props.children}
    </div>
  );
};

App.propTypes = {
  children: React.PropTypes.node
};

App.defaultProps = {
  children: null
};

export default App;
