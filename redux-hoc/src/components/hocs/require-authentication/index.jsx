import React, { Component, PropTypes } from 'react';

export default function(ComposedComponent) {
  class Authentication extends Component {
    static contextTypes = {
      router: PropTypes.object
    };

    static propTypes = {
      authentication: PropTypes.bool
    };

    static defaultProps = {
      authentication: false
    };

    componentWillMount() {
      if (!this.props.authentication) {
        this.context.router.push('/');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authentication) {
        this.context.router.push('/');
      }
    }

    render() {
      return (
        <ComposedComponent />
      );
    }
  }

  return Authentication;
}
