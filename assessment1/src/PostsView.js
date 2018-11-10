import React, {Component} from 'react';

import Post from './Post.js';

class PostsView extends Component {
  render() {
    return (
      <React.Fragment>
        <div class="row">
          <div class="col-md-4 col-lg-6"><Post {...this.props[0]}/></div>
          <div class="col-md-4 col-lg-3"><Post imgurl='http://via.placeholder.com/500'/></div>
          <div class="col-md-4 col-lg-3"><Post imgurl='http://via.placeholder.com/500'/></div>
        </div>
        <div class="row">
          <div class="col-md-4 col-lg-3"><Post imgurl='http://via.placeholder.com/500'/></div>
          <div class="col-md-4 col-lg-3"><Post imgurl='http://via.placeholder.com/500'/></div>
          <div class="col-md-4 col-lg-6"><Post imgurl='http://via.placeholder.com/500'/></div>
        </div>
      </React.Fragment>
    );
  }
}

export default PostsView;