import React, { Component } from 'react';
import './App.css';

import Posts from './Components/Post/Post';
import PostForm from './Components/Post/PostForm';

class App extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <PostForm/>
          </div>
          <div className="col-md-8">
            <Posts/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
