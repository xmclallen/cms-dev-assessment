import React, {Component} from 'react';

import Post from './Post.js';
import SkinnyPost from './SkinnyPost.js'

class PostsView extends Component {
  constructor(){
    super();
    this.state = {
      posts: ''
    };

  }
  render() {
    let filter = this.props.filter;
    var listingsURL = "";
    if("All" == filter || "Listings" == filter){
      listingsURL = "https://sv-reqres.now.sh/api/listings?per_page=9";
    } else {
      listingsURL = "";
    }
    //Make a fetch request -- defaults to GET
   // let listingsURL = "https://sv-reqres.now.sh/api/listings?per_page=9";
    fetch(listingsURL)
      .then( response => response.json()) //handle the data/response
      .then( returned => this.setState(this.state.posts = returned.data) ) //and do something with it
      .catch( error => console.error('ERROR: ', error));
  

    let p_items=this.state.posts;
    let display_posts = [];

    let i = 0;
    for(i=0; i< p_items.length; i++){
      if(0 == i%6){
        display_posts.push(
          <div className="col-md-4 col-lg-6">
                <Post data={ p_items[i]}/>
          </div>
        );
      } else if (5 == i%6){
        display_posts.push(
          <SkinnyPost data={ p_items[i]}/>
        );
      }else{
        display_posts.push(
          <div className="col-md-4 col-lg-3">
            <Post data={ p_items[i]}/>
          </div>
        );
      }
    }


    return (
      <React.Fragment>
        <div class="row">
          {display_posts}
        </div>
      </React.Fragment>
    );
  }
}

export default PostsView;