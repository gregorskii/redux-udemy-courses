import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import ResourceList from 'components/resource-list';
import requireAuth from 'components/hocs/require-authentication';

const AuthenticatesResourceList = requireAuth(ResourceList);

const Resources = () => {
  return (
    <AuthenticatesResourceList />
  );
};

Resources.contextTypes = {
  router: PropTypes.object
};

const mapStateToProps = ({ auth }) => {
  return { authentication: auth };
};

export const ResourcesComponent = Resources;

export default connect(mapStateToProps)(Resources);
