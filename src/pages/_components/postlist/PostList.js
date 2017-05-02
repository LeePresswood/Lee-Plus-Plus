import React, {Component} from 'react';
import Post from "../post/Post";

class PostList extends Component {
    render() {
        return (
            <div className="row">
                {
                    this.props.posts.map((post) =>
                        <Post key={post.blogId} post={post}/>
                    )
                }
            </div>
        );
    }
}

export default PostList;