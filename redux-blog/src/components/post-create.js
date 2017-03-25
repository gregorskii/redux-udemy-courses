import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';

import PostCreateForm from './post-create-form';
import RequestResult from '../helpers/request-result';
import ACTIONS from '../actions';
const { createPost } = ACTIONS;

class PostCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      success: undefined
    }
  }

  render() {
    return (
      <section className="postcreate">
        <header className="postlist header d-flex justify-content-between">
          <h1 className="postlist__heading ">New Post</h1>
          <Link
            to="/"
            className="postlist__newlink btn btn-info d-flex align-items-center">
            Back
          </Link>
        </header>
        <section>
          <PostCreateForm onSubmit={this.onFormSubmit.bind(this)} />
          {this.renderResult()}
        </section>
      </section>
    );
  }

  renderResult() {
    if (this.state.success !== undefined) {
      return (
        <RequestResult
          success={this.state.success}
          successMessage={"Post Created"}
          errorMessage={"Failed to create post!"} />
      );
    }
  }

  onFormSubmit(fields) {
    this.props.createPost(fields).then(
      () => {
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ createPost }, dispatch);
};

// Adds context "router" which searches up the tree for an object called
// router, only thing taht can provide this context is the react-router instance.
PostCreate.contextTypes = {
  router: PropTypes.object
};

export default connect(null, mapDispatchToProps)(PostCreate);
