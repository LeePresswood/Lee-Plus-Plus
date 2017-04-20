import React, {Component} from 'react';

import Navbar from "./_components/navbar/Navbar";

class Blog extends Component {
    render() {
        return (
            <div id="Blog">
                <Navbar/>
                <div>
                   Blog Content with props = {this.props.hello}
                </div>
            </div>
        );
    }
}

export default Blog;