import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ACTIONS from 'actions';

const { signOut } = ACTIONS;

class Signout extends Component {
  static propTypes = {
    signOut: PropTypes.func.isRequired
  }

  componentWillMount() {
    this.props.signOut();
  }

  render() {
    return (
      <div>Sorry to see you go!</div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ signOut }, dispatch);
};

export const SignoutComponent = Signout;

export default connect(null, mapDispatchToProps)(Signout);
