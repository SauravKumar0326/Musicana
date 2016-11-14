import * as types from '../actions/action-types';
import _ from 'lodash';

/*
**Initializing the state
*/
const initialState = {
  users: [],
  userPlaylist: [],
  dropDownUsers:[],
  currentUser:{},
  tracks:{}
};

const userReducer = function(state = initialState, action) {
  console.log(' logging from user reducer');
  switch(action.type) {
    case types.GET_USERS_SUCCESS:
      var a = Object.assign({}, state, { users: action.users });
      return a;//Object.assign({}, state, { users: action.users });

    case types.GET_DROPDOWN_USERS_SUCCESS:
         return Object.assign({}, state, { dropDownUsers: action.dropDownUsers });

    case types.CURRENT_USER_SUCCESS:
      return Object.assign({}, state, { currentUser: action.currentUser });

    case types.USER_PLAYLIST_SUCCESS:
      return Object.assign({}, state, { userPlaylist: action.userPlaylist });
    case types.USER_TRACK_SUCCESS:
        return Object.assign({}, state, { tracks: action.tracks});
  }
  return state;

}

export default userReducer;
