import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import PostsView from './PostsView.js';
import PostItems from './PostItems.js';

class App extends Component {
  render() {

    
    //Make a fetch request -- defaults to GET
    let listingsURL = "https://sv-reqres.now.sh/api/listings?per_page=9"
    fetch(listingsURL)
      .then( response => response.json()) //handle the data/response
      .then( returned => console.log(JSON.stringify(returned))) //and do something with it
      .catch( error => console.error('ERROR: ', error));
    


    return (
      <div className="App">
        <div class="container">
          <div class="sort-header"></div>
          <PostsView posts={PostItems}/>
        </div>
      </div>
    );
  }
}

export default App;
