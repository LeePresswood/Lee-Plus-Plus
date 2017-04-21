import React, {Component} from 'react';

import Navbar from "./_components/navbar/Navbar";
import Post from "./_components/post/Post";

class Blog extends Component {
    // constructor(props) {
    //     super(props);
    //     this.renderBlogFromProps = this.renderBlogFromProps.bind(this);
    //
    //     // this.state = {greetings: ['Jim', 'Sally', 'Bender']};
    // }

    collectListOfPostsToDisplay() {
        // if (this.props.match.params.blogId !== undefined) {
        return [
            {
                title: "Goodbye",
                writtenOn: "April 21, 2017",
                text: "This is a blog post."
            },
            {
                title: "Here's another post",
                writtenOn: "April 19, 2017",
                text: "This is another blog post. This time, I'm going to use <code>function(){console.log('hello');</code> to see how that looks.}"
            },
            {
                title: "Hello",
                writtenOn: "April 10, 2017",
                text: "This is also a blog post."
            }
        ];
        // }
        // if (this.props.match.params.tagId !== undefined) {
        //     return "Tag id of " + this.props.match.params.tagId + " found";
        // }
    }

    renderBlogFromProps() {
        // if (this.props.match.params.blogId !== undefined) {
        //     return "Blog id of " + this.props.match.params.blogId + " found";
        // }
        // if (this.props.match.params.tagId !== undefined) {
        //     return "Tag id of " + this.props.match.params.tagId + " found";
        // }
        // return "Main blog";

        let posts = this.collectListOfPostsToDisplay().map((post) =>
            <Post post={post}/>
        );

        return <div className="row">{ posts }</div>
    }

    renderEndOfPageContent() {
        // if (this.props.match.params.blogId !== undefined) {
        //     return "Blog id of " + this.props.match.params.blogId + " found";
        // }
        // if (this.props.match.params.tagId !== undefined) {
        //     return "Tag id of " + this.props.match.params.tagId + " found";
        // }
        // return "Main blog";

        return <div className="row">End of page</div>
    }

    render() {
        return (
            <div className="Blog">
                <Navbar/>
                <div className="container padding-10 rounded">
                    {this.renderBlogFromProps()}
                    {this.renderEndOfPageContent()}
                </div>
            </div>
        );
    }
}

export default Blog;