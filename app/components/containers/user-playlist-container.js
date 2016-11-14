import React from 'react';
import { connect } from 'react-redux';
import store from '../../store';
import UserPlaylist from '../views/user-playlist';
import * as userApi from '../../api/user-api';

const UserPlaylistContainer = React.createClass({

  componentDidMount: function() {
    let userId = this.props.params.userId
    userApi.getPlaylist(userId);
    userApi.getCurrentUser(userId);
  },

  render: function() {
    return (
      //passing playlist and currentUser as props to the view
      <UserPlaylist playlist ={this.props.playlist}  currentUser={this.props.currentUser}/>
    );
  }

});

/*
** Maps userPlaylist and currentUser from the store
*/
const mapStateToProps = function(store) {
  return {
    playlist: store.userState.userPlaylist,
    currentUser:store.userState.currentUser
  };
};

export default connect(mapStateToProps)(UserPlaylistContainer);
