import React, {Component} from 'react';

import Navbar from "./_components/navbar/Navbar";

class About extends Component {
    render() {
        return (
            <div id="About">
                <Navbar/>
                <div>
                    About Content
                </div>
            </div>
        );
    }
}

export default About;