import * as types from '../actions/action-types';

/*
**Gets users and action type
* @param :users
*    users from the store.
* @return :type of action,users
*
*/
export function getUsersSuccess(users) {
  return {
    type: types.GET_USERS_SUCCESS,
    users
  };
}

/*
**Gets DropdownUsers and action type
* @param :dropDownUsers
*    users from the store.
* @return :type of action,dropDownUsers
*
*/
export function getDropdownUsersSuccess(dropDownUsers) {
  return {
    type: types.GET_DROPDOWN_USERS_SUCCESS,
    dropDownUsers
  };
}
/*
**Gets currentUser and action type
* @param :currentUser
*    currentUser from the store.
* @return :type of action,currentUser
*
*/
export function getCurrentUserSuccess(currentUser) {
  return {
    type: types.CURRENT_USER_SUCCESS,
    currentUser
  };
}

/*
**Gets playlist for particular  and action type
* @param :userPlaylist
*    userPlaylist from the store.
* @return :type of action,userPlaylist
*
*/
export function userPlaylistSuccess(userPlaylist) {
  return {
    type: types.USER_PLAYLIST_SUCCESS,
    userPlaylist
  };
}

/*
**Gets tracks for particular playlist  and action type
* @param :tracks
*    tracks from the store.
* @return :type of action,tracks
*
*/
export function getTracksSuccess(tracks) {
  return {
    type: types.USER_TRACK_SUCCESS,
    tracks
  };
}
