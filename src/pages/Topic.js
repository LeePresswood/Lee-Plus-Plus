import React, {Component} from 'react';

import Navbar from "./_components/navbar/Navbar";

class Topic extends Component {
    render() {
        return (
            <div id="Home">
                <Navbar/>
                <div>
                    Topic Content
                </div>
            </div>
        );
    }
}

export default Topic;