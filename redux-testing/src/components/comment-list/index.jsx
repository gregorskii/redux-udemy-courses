import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const CommentList = (props) => {
  const renderComments = (comments, placeholder) => {
    if (!comments.length) {
      return (
        <li className="comment-list__item list-group-item">{placeholder}</li>
      );
    }

    return comments.map((comment) => {
      return (
        <li
          className="comment-list__item list-group-item"
          key={comment}
        >{comment}</li>
      );
    });
  };

  const commentListItems = renderComments(props.comments, props.placeholderText);

  return (
    <section className="comment-list">
      <ul className="comment-list__group list-group">
        {commentListItems}
      </ul>
    </section>
  );
};

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.string).isRequired,
  placeholderText: PropTypes.string
};

CommentList.defaultProps = {
  placeholderText: 'Add some comments!'
};

const mapStateToProps = ({ comments }) => {
  return { comments: comments.all };
};

export const CommentListComponent = CommentList;

export default connect(mapStateToProps)(CommentList);
