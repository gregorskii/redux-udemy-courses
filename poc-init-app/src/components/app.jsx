import React, { Component } from 'react';

import Header from './header';
import Nav from './nav';
import Footer from './footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header className="col-md-2" />
        <section className="content row">
          <Nav />
          <div className="col-md-10">
            {this.props.children}
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
