import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SortHeader from './SortHeader.js';
import PostsView from './PostsView.js';
import PostItems from './PostItems.js';

class App extends Component {
  //Add state, so we can change things as needed
  constructor(){
    super()
    this.state = {
      filter: ''
    }
  }


  render() {
    return (
      <div className="App">
        <div class="container">
          <SortHeader />
          <PostsView filter={this.state.filter}/>
        </div>
      </div>
    );
  }
}

export default App;
