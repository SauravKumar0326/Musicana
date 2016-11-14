import React from 'react';
import { connect } from 'react-redux';
import UserList from '../views/user-list';
import * as userApi from '../../api/user-api';
import store from '../../store';
import { loadSearchLayout } from '../../actions/search-layout-actions';

const UserListContainer = React.createClass({

  componentDidMount: function() {
    userApi.getUsers();
    store.dispatch(loadSearchLayout('users', 'User Results',));
  },

  render: function() {
    return (
      //passing users as props
      <UserList users={this.props.users} />
    );
  }

});

/*
** Maps users from the store
*/
const mapStateToProps = function(store) {
  return {
    users: store.userState.users
  };
};

export default connect(mapStateToProps)(UserListContainer);
