import React from 'react';
import { connect } from 'react-redux';
import store from '../../store';
import TrackList from '../views/track-list.js';
import * as userApi from '../../api/user-api';

const TrackListContainer = React.createClass({

  componentDidMount: function() {
    let albumId = this.props.params.albumId;
     userApi.getTracks(albumId);
  },

  render: function() {
    return (
        //passing tracks as props to the view
      <TrackList tracks ={this.props.tracks} />
    );
  }

});

/*
** Maps tracks from the store
*/
const mapStateToProps = function(store) {
  return {
    tracks: store.userState.tracks
  };
};

export default connect(mapStateToProps)(TrackListContainer);
