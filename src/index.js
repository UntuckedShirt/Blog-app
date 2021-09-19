// you import thunk thurhg your root index.js
// you then import applyMidleWare function is how you connect a middleware
// is how we cannect a middleware to a redux store
// we need to add code to the store so we extract the creatore store and declare it asa var
// you add store to provder and as a second argument you call applyMiddleWEare
// it needs to be passed in thunk

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);