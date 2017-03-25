import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

import ACTIONS from '../actions';
const { fetchPosts } = ACTIONS;

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <section className="postlist">
        <header className="header d-flex justify-content-between">
          <h1 className="postlist__heading ">Blog Posts</h1>
          <Link
            to="/posts/new"
            className="postlist__newlink btn btn-primary d-flex align-items-center">
            Add a Post
          </Link>
        </header>
        <section className="postlist__list">
          <div className="list-group">
            {this.renderPosts()}
          </div>
        </section>
      </section>
    );
  }

  renderPosts() {
    const { posts } = this.props;

    if (!posts.length) {
      return (
        <div>Loading...</div>
      );
    }

    return posts.map((post) => {
      return (
        <Link
          to={`/posts/${post.id}`}
          key={post.id}
          className="list-group-item list-group-item-action flex-column align-items-start">
          <div className="d-flex w-100 justify-content-between">
            <h3>{post.title}</h3>
            <div className="d-flex justify-content-end">
              <span>{post.categories}</span>
            </div>
          </div>
        </Link>
      );
    });
  }
};

const mapStateToProps = (state) => {
  return { posts: state.posts.all };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchPosts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);
