import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    const book = this.props.book;
    if (!book) {
      return (
        <div>Select a book on the left to learn more.</div>
      );
    }

    return (
      <div>
        <h3>Details for:</h3>
        <p className="title">{book.title}</p>
        <p className="pages">Pages: {book.pages}</p>
      </div>
    );
  };
}

function mapStateToProps({activeBook}) {
  return {
    book: activeBook
  }
}

export default connect(mapStateToProps)(BookDetail);
