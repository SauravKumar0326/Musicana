import axios from 'axios';
import store from '../store';
import * as auth from '../constants/auth-constant';
import { getUsersSuccess,getDropdownUsersSuccess,getCurrentUserSuccess, userPlaylistSuccess,getTracksSuccess } from '../actions/user-actions';

/**
 * Get all users at page loading and dispatches is to the store
 *Initializes dropDownUsers as empty in the store
 *Need to apply paging(for now getting only 50 users
 */
export function getUsers() {
  return axios.get('http://api.soundcloud.com/users?client_id='+auth.CLIENT_ID+'&limit=50')
    .then(response => {
      store.dispatch(getDropdownUsersSuccess([]));
      store.dispatch(getUsersSuccess(response.data));
      return response;
    });
}

/**
 * Calls the search api
 *Initializes dropDownUsers to empty
 *Dispatches the results to users in the store
 *param:query::  string to search
 */
export function searchUsers(query = '') {
  return axios.get('http://api.soundcloud.com/users?client_id='+auth.CLIENT_ID+'&skip=0&limit=50&q='+ query)
    .then(response => {
      store.dispatch(getDropdownUsersSuccess([]));
      store.dispatch(getUsersSuccess(response.data));
      return response;
    });
}

/**
 *Populate the Dropdown of search-textBox
 *dispatches results to dropDownUsers in the store
 *param:query::  string to search
 */
export function searchDropdownUsers(query = '') {
  if (query ==''){
    var response=[];
    store.dispatch(getDropdownUsersSuccess(response.data));
    return response;
  }else{
  return axios.get('http://api.soundcloud.com/users?client_id='+auth.CLIENT_ID+'&skip=0&limit=10&q='+ query)
    .then(response => {
      store.dispatch(getDropdownUsersSuccess(response.data));
      return response;
    });
    }
}

/*
**Calls the Get playlist api
* @param :userId
*   User Id  whose playlist is to be fetched
*dispatches result to the playlist in the store
*
*/
export function getPlaylist(userId) {

  // Get the user playlist data.
  return axios.get('https://api.soundcloud.com/users/'+ userId+'/playlists?client_id='+auth.CLIENT_ID)
    .then(response => {
      store.dispatch(userPlaylistSuccess(response.data));
      return response;
    });
}

/*
**Calls the Get playlist api
* @param :userId
*   User Id  whose playlist is to be fetched
*dispatches result to the playlist in the store
*
*/
export function getCurrentUser(userId) {

  // Get the user playlist data.
  return axios.get('https://api.soundcloud.com/users/'+ userId+'?client_id='+auth.CLIENT_ID)
    .then(response => {
      store.dispatch(getCurrentUserSuccess(response.data));
      return response;
    });
}

/*
**Calls the Get tracks api
* @param :albumId
*   User Id  whose albumId is to be fetched
*dispatches result to the tracks in the store
*
*/
export function getTracks(albumId) {
  return axios.get('http://api.soundcloud.com/playlists/'+albumId+'?client_id='+auth.CLIENT_ID+'&skip=0&limit=30')
    .then(response => {
      store.dispatch(getTracksSuccess(response.data));
      return response;
    });
}
