import React, {Component} from 'react';

import './Home.css';

import Navbar from "../navbar/Navbar";

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <Navbar/>
                <div>
                    Content
                </div>
            </div>
        );
    }
}

export default Home;