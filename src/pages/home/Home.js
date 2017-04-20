import React, {Component} from 'react';

import './Home.css';

import Navbar from "../_components/navbar/Navbar";

class Home extends Component {
    render() {
        return (
            <div id="Home">
                <Navbar/>
                <div>
                    Content
                </div>
            </div>
        );
    }
}

export default Home;