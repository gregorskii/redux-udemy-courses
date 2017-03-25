import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const UserList = (props) => {
  const renderUser = (user) => {
    return (
      <div key={user.id} className="user card card-block col-md-3">
        <h4 className="card-title">{user.name}</h4>
        <p className="card-text">{user.company.name}</p>
        <div className="user__actions row">
          <a href={`mailto:${user.email}`} className="btn btn-primary col-md-5">Email</a>
          <a href={user.website} className="btn btn-primary col-md-5">Website</a>
        </div>
      </div>
    );
  };

  if (!props.users.length) {
    return (
      <section className="user-list">
        <h1>Company Directory</h1>
        <div className="user-list__directory row">
          <div>Add some users!</div>
        </div>
      </section>
    );
  }

  return (
    <section className="user-list">
      <h1>Company Directory</h1>
      <div className="user-list__directory row">
        {props.users.map(renderUser)}
      </div>
    </section>
  );
};

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape())
};

UserList.defaultProps = {
  users: []
};

const mapStateToProps = ({ users }) => {
  return { users };
};

export const UserListComponent = UserList;

export default connect(mapStateToProps)(UserList);
