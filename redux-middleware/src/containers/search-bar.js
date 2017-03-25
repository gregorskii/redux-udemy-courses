import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };
  }

  render() {
    return (
      <form
        onSubmit={this.onFormSubmit.bind(this)}
        className="search-bar input-group">
        <input
          className="form-control"
          placeholder="Get a five-day forcast in your favorite cities"
          value={this.state.term}
          onChange={(event) => this.onInputChange(event)} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Search</button>
        </span>
      </form>
    );
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    // Fetch weather data
    this.props.fetchWeather(this.state.term);

    // Set term empty, causes render
    this.setState({ term: '' });
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
