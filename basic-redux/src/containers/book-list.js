import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectBook } from '../actions/index';

class BookList extends Component {
  constructor(props) {
    super(props);

    // Container classes can still include their own state
    this.state = {
      some: 'value'
    }
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }

  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => {this.props.selectBook(book)}}
          className="list-group-item">{book.title}</li>
      );
    })
  }

  // Container classes can also manipulate their own state, independent of
  // application state managed by redux.
  someAction() {
    this.setState({some: 'otherValue'});
  }
}

// Cleanup can use destructuring here to get books from state
//function mapStateToProps(state) {
function mapStateToProps({books}) {
  // Whatever object is returned here will become props on component
  return {
    //books: state.books
    books
  };
}

// Anything returned from this function will end up0 as props on the BookList
// container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called the result should be passed to all of our
  // reducers
  return bindActionCreators({ selectBook }, dispatch);
}

// Connect takes a function(and a component) and returns a container
// This container needs to know about the new dispatch method "selectBook" and
// any other methods from "mapDispatchToProps", this will make the result of any
// action creator to the props of the component
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
