import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';


// when receiving this message Store does not have a valid reducer. 
// Make sure the argument passed to combineReducers is an object
// whose values are reducers. Just add a dummy code for now because it needs to receive reducer at some point
// ---------------------------------------------------------------//

// each reducer will ahve a seperate file. More reducers in one file would end up being confusing
// we will create a Post reduecer  it ewill be responbl to watch for actions with type fetchPost
// you dont call reducers as hooks
// first rule of reducer is it must return any value besides 'undefined'
// second rule Produces 'state or fata to be used insdie of you app using only previous
// state and the action
// rule three Must not return reach out of itself to decide what value to 
// reutrn (reducers are pure)
// when a reducer is called its only supposee to look at hte pervious state value
// and what actually is returned. a bad return would be return acios.get('/posts) || 
// return docuement.querySelector('input)
// a good return would be something like return state + action
// final rule is reducer Must not mutate its input 'state' arguement
// this rule may be misleadeing but the truth is you can mutate a 'state' argument all day
// Mutating in the context of JS means 
// examples if bad mutation would be state.name = 'Same || sstate[0] = 'Sam
// the code above can b run and not error out but  its easier to tell beginners
// 'dont mutate state ever than to tell them when they can and cant
// we are not gopin to mutate state ever

export default combineReducers({
    posts: postsReducer,
    users: usersReducer
  });