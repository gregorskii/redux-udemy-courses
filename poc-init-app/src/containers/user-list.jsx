import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ACTIONS from '../actions';

const { changeAppConfig } = ACTIONS;

class UserList extends Component {
  render() {
    if (!this.props.appConfig.showUsersList) {
      return (
        <div></div>
      )
    }

    return (
      <section className="user-list">
        <section className="user-list__list">
          <div className="list-group">
            {this.renderUsers()}
          </div>
          <button
            onClick={this.onHideClick.bind(this)}
            className="btn btn-primary">Hide these!</button>
        </section>
      </section>
    );
  }

  renderUsers() {
    const { users } = this.props;

    if (!users.length) {
      return (
        <div>Loading...</div>
      );
    }

    return users.map((user) => {
      return (
        <div className="list-group-item" key={user.id}>{user.name}</div>
      );
    });
  }

  onHideClick() {
    this.props.changeAppConfig({
      showUsersList: false
    });
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users.all,
    appConfig: state.config
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ changeAppConfig }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
