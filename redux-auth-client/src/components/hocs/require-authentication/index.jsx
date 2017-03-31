import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// TODO: will need to be tested, this is not very testable...
export default function(ComposedComponent) {
  class Authentication extends Component {
    static contextTypes = {
      router: PropTypes.object
    };

    static propTypes = {
      authenticated: PropTypes.bool
    };

    static defaultProps = {
      authenticated: false
    };

    componentWillMount() {
      if (!this.props.authenticated) {
        this.context.router.push('/');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.context.router.push('/');
      }
    }

    render() {
      return (
        <ComposedComponent {...this.props} />
      );
    }
  }

  const mapStateToProps = ({ auth }) => {
    return { authenticated: auth.authenticated };
  };

  return connect(mapStateToProps)(Authentication);
}
