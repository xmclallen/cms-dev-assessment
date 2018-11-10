import React, {Component} from 'react';

import Post from './Post.js';

class PostsView extends Component {
  render() {
    return (
      <React.Fragment>
        <div class="row">
          <div class="col-md-4 col-lg-6"><Post data={this.props.posts[0]}/></div>
          <div class="col-md-4 col-lg-3"><Post data={this.props.posts[1]}/></div>
          <div class="col-md-4 col-lg-3"><Post data={this.props.posts[2]}/></div>
        </div>
        <div class="row">
          <div class="col-md-4 col-lg-3"><Post data={this.props.posts[3]}/></div>
          <div class="col-md-4 col-lg-3"><Post data={this.props.posts[4]}/></div>
          <div class="col-md-4 col-lg-6"><Post data={this.props.posts[5]}/></div>
        </div>
      </React.Fragment>
    );
  }
}

export default PostsView;