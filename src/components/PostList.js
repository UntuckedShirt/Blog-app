import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();

    }
    render () {
    return<div> Post List </div>
    }      
}


// we dont not have a mapStateToProp fuinction atm. we will eventuyally but there is not
// state or data for thecomponent. We need ot opass first arguement to the function
// we will pass null for now since there is no state for the component


export default connect(null, {fetchPosts}) (PostList);