import React, {Component} from 'react';

import Navbar from "./_components/navbar/Navbar";
import PostList from "./_components/postlist/PostList";
import SelectedPost from "./_components/postlist/SelectedPost";

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
                blogId: 1,
                writtenOn: "April 21, 2017",
                text: "<b>Here's a header</b><p>And here's text.</p>"
            },
            {
                title: "Here's another post",
                blogId: 2,
                writtenOn: "April 19, 2017",
                text: "This is another blog post. This time, I'm going to use <pre><code class='js'>function sayHello(){\n\tconsole.log('hello');\n}</code></pre> to see how that looks."
            },
            {
                title: "Hello",
                blogId: 3,
                writtenOn: "April 10, 2017",
                text: "This is also a blog post."
            },
            {
                title: "Hello",
                blogId: 4,
                writtenOn: "April 10, 2017",
                text: "This is also a blog post."
            },
            {
                title: "Hello",
                blogId: 5,
                writtenOn: "April 10, 2017",
                text: "This is also a blog post."
            },
            {
                title: "Hello",
                blogId: 6,
                writtenOn: "April 10, 2017",
                text: "This is also a blog post."
            },
            {
                title: "Hello",
                blogId: 7,
                writtenOn: "April 10, 2017",
                text: "This is also a blog post."
            },
            {
                title: "Hello",
                blogId: 8,
                writtenOn: "April 10, 2017",
                text: "This is also a blog post."
            },
            {
                title: "Hello",
                blogId: 9,
                writtenOn: "April 10, 2017",
                text: "This is also a blog post."
            },
            {
                title: "Hello",
                blogId: 10,
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

        if (this.props.match.params.blogId !== undefined) {
            let selectedPost = this.collectListOfPostsToDisplay().find((post) => {
                return post.blogId === Number(this.props.match.params.blogId);
            });

            return <SelectedPost post={selectedPost}/>
        }
        else {
            return <PostList posts={this.collectListOfPostsToDisplay()} blogId={this.props.match.params.blogId}/>
        }
    }

    renderEndOfPageContent() {
        // if (this.props.match.params.blogId !== undefined) {
        //     return "Blog id of " + this.props.match.params.blogId + " found";
        // }
        // if (this.props.match.params.tagId !== undefined) {
        //     return "Tag id of " + this.props.match.params.tagId + " found";
        // }
        // return "Main blog";

        if (this.props.match.params.blogId !== undefined) {
            return <div className="row">End of page with related posts.</div>
        }
        else {
            return <div className="row">End of page with next and previous.</div>
        }
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