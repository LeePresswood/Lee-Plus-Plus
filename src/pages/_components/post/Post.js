import React, {Component} from 'react';
// import {Link} from 'react-router-dom'

import './Post.css';

class Post extends Component {
    render() {
        return (
            <div className="col-sm-12 margin-10 post" key={this.props.post.title}>
                <p className="postTitle">{this.props.post.title}</p>
                <p className="postWrittenOn">{this.props.post.writtenOn}</p>
                <p className="postText">{this.props.post.text}</p>
            </div>
        );
    }
}

export default Post;