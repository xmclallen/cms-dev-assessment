import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Post from './Post.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="post_container">
          <Post />
        </div>
      </div>
    );
  }
}

export default App;
