import React, {Component} from 'react';

import Post from './Post.js';

class PostsView extends Component {
  render() {
    let p_items=this.props.posts;
    let display_posts = [];

    let i = 0;
    for(i=0; i< p_items.length; i++){
      if(0 == i%6 || 5 == i%6){
        display_posts.push(
          <div className="col-md-4 col-lg-6" key={i}>
                <Post data={ p_items[i]}/>
            </div>
        );
      }
      else{
        display_posts.push(
          <div className="col-md-4 col-lg-3" key={i}>
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