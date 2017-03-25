import React from 'react';

import Header from 'components/header';

const App = (props) => {
  return (
    <div>
      <Header />
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
