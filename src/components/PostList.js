import React from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions';
import UserHeader from './UserHeader';

// we need to get a list of posts insdie the component, whenever we need 
// to get data form the redux side of app into react. We always need to define
// mapStateToProps function and pass it off to connect

class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPostsAndUsers();
    }
  
    renderList() {
      return this.props.posts.map(post => {
        return (
          <div className="item" key={post.id}>
            <i className="large middle aligned icon user" />
            <div className="content">
              <div className="description">
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </div>
              <UserHeader userId={post.userId} />
            </div>
          </div>
        );
      });
    }
  
    render() {
      return <div className="ui relaxed divided list">{this.renderList()}</div>;
    }
  }
  
  const mapStateToProps = state => {
    return { posts: state.posts };
  };
// we dont not have a mapStateToProp fuinction atm. we will eventuyally but there is not
// state or data for thecomponent. We need ot opass first arguement to the function
// we will pass null for now since there is no state for the component


export default connect(
    mapStateToProps,
    { fetchPostsAndUsers }
  )(PostList);
  