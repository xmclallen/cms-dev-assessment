import React, {Component} from 'react';

class Post extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="h-100 w-100">
                <div className="post-image h-50">
                <img src={this.props.data.mediaurl}></img>
                </div>
                <div className="post-body">
                    <p className="post-title">{this.props.data.title}</p>
                    <p>{this.props.data.description}</p>         
   </div>
                </div>
            </React.Fragment>
        );
    }
}
  
export default Post;
  