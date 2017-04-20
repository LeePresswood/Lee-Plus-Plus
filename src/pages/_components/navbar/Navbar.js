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
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="discover">Discover</Link></li>
                            <li><Link to="authors">Authors</Link></li>
                            <li><Link to="topics">Topics</Link></li>
                        </ul>

                        <ul className="nav navbar-nav navbar-right">
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">My Account<span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a href="#">Favorite Quotes</a>
                                    </li>
                                    <li>
                                        <a href="#">Favorite Authors</a>
                                    </li>
                                    <li role="separator" className="divider"></li>
                                    <li>
                                        <a href="#">Settings</a>
                                    </li>
                                    <li role="separator" className="divider"></li>
                                    <li>
                                        <a href="#">Log Out</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;