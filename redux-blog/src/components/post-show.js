import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

import RequestResult from '../helpers/request-result';
import ACTIONS from '../actions';
const { getPost, deletePost } = ACTIONS;

class PostShow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      success: undefined
    }
  }

  componentDidMount() {
    this.props.getPost(this.props.params.id);
  }

  render() {
    return (
      <section className="postshow">
        <header className="header d-flex justify-content-between">
          <h1 className="postshow__heading ">Blog Posts</h1>
          <Link
            to="/"
            className="postshow__backlink btn btn-info d-flex align-items-center">
            Back
          </Link>
        </header>
        <section className="postshow__content">
          {this.renderPost()}
          <button
            className="postshow__delete btn btn-danger"
            onClick={this.onDeleteClick.bind(this)}>Delete</button>
          {this.renderResult()}
        </section>
      </section>
    );
  }

  // TODO: fix dangerouslySetInnerHTML
  renderPost() {
    const { post } = this.props;

    if (!post) {
      return (
        <div>Loading...</div>
      );
    }

    return (
      <div>
        <div className="jumbotron">
          <h1 className="display-3">{post.title}</h1>
          <p className="lead">{post.categories}</p>
        </div>
        <div dangerouslySetInnerHTML={{__html: post.content}} />
      </div>
    );
  }

  renderResult() {
    if (this.state.success !== undefined) {
      return (
        <RequestResult
          success={this.state.success}
          successMessage={"Post Deleted"}
          errorMessage={"Failed to delete post!"} />
      );
    }
  }

  onDeleteClick(event) {
    this.props.deletePost(this.props.post.id)
      .then(() => {
        this.setState({ success: true });

        setTimeout(() => {
          // Use context.router
          this.context.router.push('/');
        }, 1500);
      },
      () => {
        this.setState({ success: false });
      }
    );
  }
}

PostShow.contextTypes = {
  router: PropTypes.object
};

const mapStateToProps = (state) => {
  return { post: state.posts.post };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getPost, deletePost }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PostShow);
