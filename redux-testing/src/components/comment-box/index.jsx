import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ACTIONS from 'actions';
const { addComment } = ACTIONS;

class CommentBox extends Component {
  static propTypes = {
    labelText: PropTypes.string,
    addComment: PropTypes.func.isRequired
  };

  static defaultProps = {
    labelText: 'Comment'
  };

  constructor(props) {
    super(props);

    this.onTextAreaChange = this.onTextAreaChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);

    this.state = { comment: '' };
  }

  onTextAreaChange(event) {
    this.setState({ comment: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.addComment(this.state.comment);
    this.setState({ comment: '' });
  }

  render() {
    return (
      <section className="comment-box">
        <form className="comment-box__form" onSubmit={this.onFormSubmit}>
          <div className="form-group">
            <label
              htmlFor="comment"
              className="comment-box__label"
            >{this.props.labelText}</label>
            <textarea
              name="comment"
              className="comment-box__textarea form-control"
              onChange={this.onTextAreaChange}
              value={this.state.comment}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary comment-box__submit"
            onClick={this.onSubmitClick}
          >Submit</button>
        </form>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addComment }, dispatch);
};

export const CommentBoxComponent = CommentBox;

export default connect(null, mapDispatchToProps)(CommentBox);
