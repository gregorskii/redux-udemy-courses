import React from 'react';

const App = (props) => {
  return (
    <section className="content">
      {props.children}
    </section>
  );
};

App.propTypes = {
  children: React.PropTypes.node
};

App.defaultProps = {
  children: null
};

export default App;
