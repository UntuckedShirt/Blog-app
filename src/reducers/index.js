import { combineReducers } from 'redux';
// when receiving this message Store does not have a valid reducer. 
//Make sure the argument passed to combineReducers is an object
//whose values are reducers. Just add a dummy code for now because it needs to receive reducer at some point

export default combineReducers({
    replaceMe: () => 99
});