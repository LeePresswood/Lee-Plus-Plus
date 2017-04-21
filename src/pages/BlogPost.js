import React, {Component} from 'react';

import Navbar from "./_components/navbar/Navbar";

class BlogPost extends Component {
    constructor(props) {
        super(props);
        this.renderBlogFromProps = this.renderBlogFromProps.bind(this);

        // this.state = {greetings: ['Jim', 'Sally', 'Bender']};
    }

    renderBlogFromProps() {
        if(this.props.match.params.blogId !== undefined){
            return "Blog id of " + this.props.match.params.blogId + " found";
        }
        if(this.props.view === "topics"){
            return "Displaying list of topics";
        }
        if(this.props.view === "random"){
            let random = Math.random() * 50;
            return "Random number chosen: " + random;
        }
        return "Main blog";
    }

    render() {
        return (
            <div id="Blog">
                <Navbar/>
                <div>
                    {this.renderBlogFromProps()}
                </div>
            </div>
        );
    }
}

export default BlogPost;