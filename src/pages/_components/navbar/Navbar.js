import React, {Component} from 'react';
import {Link} from 'react-router-dom'

import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                <nav className="navbar">
                    <div className="container">
                        <div className="row">
                            <ul className="nav navbar-nav">
                                {/*<li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>*/}
                                <li><Link to="/">Blog</Link></li>
                                <li><Link to="/123">Random Blog</Link></li>
                                <li><Link to="/topics">Topics</Link></li>
                                <li><Link to="/topics/123">Random Topic</Link></li>
                                <li><Link to="/courses">Courses</Link></li>
                            </ul>

                            <ul className="nav navbar-nav navbar-right">
                                {/*<li><Link to="Twitter">Twitter</Link></li>*/}
                                {/*<li><Link to="Github">GitHub</Link></li>*/}
                                <li><Link to="/about">About</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;