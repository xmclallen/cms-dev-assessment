import React, {Component} from 'react';

import Post from './Post.js'

class SkinnyPost extends Component {
    render() {
        return (
            <React.Fragment>
                {/*only show the skinny post on large*/}
                <div class="d-none d-lg-block col-lg-6">
                <div class="row">
                    <div className="col-6 post-image-skinny">
                    <img src={this.props.data.mediaurl}></img>
                    </div>
                    <div className="col-6 post-body-skinny">
                        <p className="post-title">{this.props.data.title}</p>
                        <p>{this.props.data.description}</p>
                    </div>
                </div>
                </div>
                    

                <div className="d-lg-none col-md-4">
                    <Post data={this.props.data} />
                </div>
            </React.Fragment>
        );
    }
}
  
export default SkinnyPost;