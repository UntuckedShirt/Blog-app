// General Data loading with redux
// we render some component on screen such as the PostList compoennt which
// needs alist from the api. We do this by calling a componentDidMunt lifecycle method
// a class based component was created just for this reason
// inside our method we will reate a Action creator whcih will run axios to make
// an api request. The api will respond with some data which will be a list of blogposts
// our action creator will return and action and use our etch data on the payload property
// we will then have a reducer that will be puling data from the payload property
// everytime a reducer is run itll return some values which form up
// a new state obj. Everytime theyre run itll take state and send it off to the react side
// ofthe application which will then cause it to be rerendered. Our list of posts in our
// post list component using mapToState

import React from 'react';
import PostList from './PostList';

const App = () => {
    return (
      <div className="ui container">
        <PostList />
      </div>
    );
  };
  
  export default App;
