import React, {Component} from 'react';

import Navbar from "./_components/navbar/Navbar";

class Author extends Component {
    render() {
        return (
            <div id="Author">
                <Navbar/>
                <div>
                    Author Content
                </div>
            </div>
        );
    }
}

export default Author;