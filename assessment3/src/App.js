import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import PostsView from './PostsView.js';
import PostItems from './PostItems.js';

class App extends Component {
  //Add state, so we can change things as needed
  constructor(){
    super()
    this.state = {
      posts: ''
    }
  }


  render() {

    
    //Make a fetch request -- defaults to GET
    let listingsURL = "https://sv-reqres.now.sh/api/listings?per_page=9"
    fetch(listingsURL)
      .then( response => response.json()) //handle the data/response
      .then( returned => this.setState({posts: returned.data}) ) //and do something with it
      .catch( error => console.error('ERROR: ', error));
    


    return (
      <div className="App">
        <div class="container">
          <div class="sort-header row">
            <div class="col-sm-1" ><button class="btn btn-primary btn-md active">All</button></div>
            <div class="col-sm-1" ><button class="btn btn-secondary btn-md active">Listings</button></div>
            <div class="col-sm-1" ><button class="btn btn-secondary btn-md active" role="button">Events</button></div>
            <div class="col-sm-1" ><button class="btn btn-secondary btn-md active" role="button">Offers</button></div>
          </div>
          <PostsView posts={this.state.posts/*PostItems*/}/>
        </div>
      </div>
    );
  }
}

export default App;
