import React, {Component} from 'react';
import {Link} from 'react-router-dom'

import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div id="Navbar">
                <nav className="navbar">
                    <div className="container">
                        <ul className="nav navbar-nav">
                            {/*<li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>*/}
                            <li><Link to="/blog/latest">Blog</Link></li>
                            <li><Link to="/blog/topics">Topics</Link></li>
                            <li><Link to="/blog/random">Random</Link></li>
                        </ul>

                        <ul className="nav navbar-nav navbar-right">
                            <li><Link to="Twitter">Twitter</Link></li>
                            <li><Link to="Github">GitHub</Link></li>
                            <li><Link to="/">About</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;