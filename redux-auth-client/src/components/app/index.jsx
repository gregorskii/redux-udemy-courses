import React from 'react';

import Header from 'components/header';

const App = (props) => {
  return (
    <div>
      <section className="header">
        <Header />
      </section>
      <section className="content">
        {props.children}
      </section>
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
