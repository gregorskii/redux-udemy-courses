import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ACTIONS from 'actions';

const { getPosts } = ACTIONS;

class SignupForm extends Component {
  static propTypes = {
    getPosts: PropTypes.func.isRequired,
    posts: PropTypes.arrayOf(React.PropTypes.string)
  }

  static defaultProps = {
    posts: []
  }

  static renderPosts(posts) {
    return posts.map((post) => {
      return (
        <li key={post} className="list-group-item">{post}</li>
      );
    });
  }

  // TODO: debug doing this out of componentWillMount
  // TODO: debug this erroring when parent redirects out when not logged in
  componentWillMount() {
    this.props.getPosts();
  }

  render() {
    return (
      <section className="feature">
        <ul className="list-group">
          {SignupForm.renderPosts(this.props.posts)}
        </ul>
      </section>
    );
  }
}

const mapStateToProps = ({ posts }) => {
  return { posts };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getPosts }, dispatch);
};

export const SignupFormComponent = SignupForm;

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
