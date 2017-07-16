import React, {Component} from 'react';
import Post from "../post/Post";

class SelectedPost extends Component {
    render() {
        return (
            <div className="row">
                <Post key={this.props.post.blogId} post={this.props.post}/>
            </div>
        );
    }
}

export default SelectedPost;