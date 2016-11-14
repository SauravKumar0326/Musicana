import { combineReducers } from 'redux';

// Reducers
import userReducer from './user-reducer';
import searchLayoutReducer from './search-layout-reducer';

// Combine Reducers
var reducers = combineReducers({
    userState: userReducer,
    searchLayoutState: searchLayoutReducer
});

export default reducers;
