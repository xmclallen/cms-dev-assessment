import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Post from './Post.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="sort-header"></div>
        <div class="container">
          <div class="row">
            <div class="col-md-4 col-lg-6"><Post /></div>
            <div class="col-md-4 col-lg-3"><Post /></div>
            <div class="col-md-4 col-lg-3"><Post /></div>
          </div>
          <div class="row">
            <div class="col-md-4"><Post /></div>
            <div class="col-md-4"><Post /></div>
            <div class="col-md-4"><Post /></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
