import React, {Component} from 'react';
import {Link} from 'react-router-dom'

import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/topics">Topics</Link></li>
                </ul>
            </div>
        );
    }
}

export default Navbar;