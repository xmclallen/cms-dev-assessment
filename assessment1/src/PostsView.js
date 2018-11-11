import React, {Component} from 'react';

import Post from './Post.js';

class PostsView extends Component {
  render() {


    let all_posts = <React.Fragment>
    {/* GOAL is to define this variable programatically based on the props of render()
         But for now, will settle with another mock-up
          */}
    <div class="col-md-4 col-lg-6"><Post data={this.props.posts[0]}/></div>
    <div class="col-md-4 col-lg-3"><Post data={this.props.posts[1]}/></div>
    <div class="col-md-4 col-lg-3"><Post data={this.props.posts[2]}/></div>
    <div class="col-md-4 col-lg-3"><Post data={this.props.posts[3]}/></div>
    <div class="col-md-4 col-lg-3"><Post data={this.props.posts[4]}/></div>
    <div class="col-md-4 col-lg-6"><Post data={this.props.posts[5]}/></div>

    </React.Fragment>
    ;


    return (
      <React.Fragment>
        <div class="row">
          {all_posts}
        </div>
      </React.Fragment>
    );
  }
}

export default PostsView;