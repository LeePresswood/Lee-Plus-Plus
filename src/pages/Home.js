import React, {Component} from 'react';

import Navbar from "./_components/navbar/Navbar";

class Home extends Component {
    render() {
        return (
            <div id="Home">
                <Navbar/>
                <div>
                    Home Content
                </div>
            </div>
        );
    }
}

export default Home;