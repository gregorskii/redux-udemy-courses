import React, { Component } from 'react';

class App extends Component {
  render() {
    // children are passed through component on the route
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
