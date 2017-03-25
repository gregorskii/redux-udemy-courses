// You can import entire + specific like this..
import React, { Component } from 'react';

// Always start with a functional component, but upgrade when needed
// const SearchBar = () => { return (<input />) };

class SearchBar extends Component {
  // State is defined in the constuctor, only function called automatically when
  // a new instance is created
  constructor(props) {
    // Pass it up
    super(props);

    // Define initial state
    this.state = {
      term: ''
    }
  }

  // All class based components must define their own render function
  render() {
    // Render must always return JSX
    return (
      // Shorthand
      //<input onChange={value => console.log(event.target.value)} />
      //<input onChange={value => this.setState({ term: event.target.value });} />

      // All input elements support a vanilla event for onChange, break out of
      // JSX using {} then reference the handler function
      // Bind this to function handler

      // Basic input, not Controlled
      // <input onChange={this.onInputChange.bind(this)} />

      // Controlled Component, the value of the components value is dictated
      // by the state
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }

  onInputChange(term) {
    //console.log('changed', event.target.value);

    // Don't do this
    //this.state.term = event.target.value;

    // Do this
    this.setState({term});
    this.props.onSearchTermChange(this.state.term);
  }
}

export default SearchBar;
