import _ from 'lodash'
import jsonPlaceholder from '../apis/jsonPlaceholder';
 
// our fetchPost action creator must return plain JS obj with a type
// property. in present we are not reurning an action from our 
// action creator
// ---------------------------------------------------------------//
// this way of writing code is a bad approach!!!
// not bad by design but bad bybreaking rules of an action creator in redux
// ---------------------------------------------------------------//

// what if async await had been removed?
// we dont get any special syntax when transpiled ot es5
// we will be returning a plain js obj and technically becomes a promise
// we refer the pronmise because we are making a request to an api
// promise obj gives us a lil handle when request is  ocmpleted at somepoint in the future
// without asycn await we dont get some data back. We get a promise ovj
// thall gove us acces to pormise data at some point later
// with a promise even though it works wont work the wy we need it to
// promise restricts access to data
// ---------------------------------------------------------------//

// up to this point we have been writing in sycnhronys action creator. a sync is one where we call it
// it returns an action obj with all relevent data attached to obj and is rady to be processed by reduers
// Async action creator requires time to dispatch. Anytime you have an action cretor that has a netwrork request
// will alway ve considered an async actoin creator
// if we want thes inside the application we need a middleware to allow the issue to be dealt with
// a middleware is a plain JS function that is going to be called
// with every action you distpatch
// insdie that afunction a middleware has the abilit to stop and action
// it can mod an action and or mess with an aciton
// you can write your own custom middlewares
// Action creators must return an action obj, actions must have a type prpetry
// Actions can optionally have a 'paylod'
// ---------------------------------------------------------------//

// redux thunk relaxes th rule around an action creator
// action creators can return action obj. Action creators can return functions
// if an action obj gets returned it must havea type
// if an action bvj gets returned it can optionally have a payload
// the steps to this is we return an Action creator return as an action
// it can return either something or an obj
// after we return a somehting or dispatch it itll end up in redux thunk
// thunk will look at it and ask whether its a function oor an obj
// if an obj redux thunk will send it somewhere else
// redux thunk when returned as a function will invoke a function and passes
// a dispatch and getstate functions as arguements
// we can pass actoin into the dispatch functions
// dispatch we can change any data we want,
// getState we can read or access any data we want

// ---------------------------------------------------------------//

// these is no need for an action to be returned when using htunk
// instead you would call dispatch and pass in an action obj
// when using thunk we can use async await with no problems
// when using 1 arguemnt in a fuction we dont need () 
// we dont need the curlies in the out function and the return keyword
// this is refatored to this example below

export const fetchPostsAndUsers = () => async dispatch => {
    console.log('about to fetch post')
    await dispatch(fetchPosts());
    console.log('fetched posts')
}

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');
  
    dispatch({ type: 'FETCH_POSTS', payload: response.data });
  };

// when we call this action creator we want to call the id of the user we want to fetch
// below is the id of he user we want to fetch
// ecerytime memoize is called itll return whatever it returned whe nit was called
// even though we are memoiing we are memoizing a new function
// we need to define a function outside of our action creator
// thatll make a request and dispatch oru action. itll get memoized outside the creator




  
// you add the underscore in the new variable called _fetchUser. You put the underscore
// to indicate that this is a private function and that other engi should not attempt otcall func unless fmailiar
// 

// export const fetchUser = id => dispatch => _fetchUser(id, dispatch);
// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);
  
//     dispatch({ type: 'FETCH_USER', payload: response.data });
// });


export const fetchUser = id => async dispatch => {


    const response = await jsonPlaceholder.get(`/users/${id}`);
  
    dispatch({ type: 'FETCH_USER', payload: response.data });
};
