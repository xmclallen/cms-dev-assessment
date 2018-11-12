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
      filter: 'All'
    }
  }


  render() {
    return (
      <div className="App">
        <div class="container">
          <SortHeader filter={this.state.filter}/>
          <PostsView filter={this.state.filter}/>
        </div>
      </div>
    );
  }
}

export default App;
