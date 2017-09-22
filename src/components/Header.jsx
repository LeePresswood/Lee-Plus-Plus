import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import '../styles/Header.css';
import logo from '../img/lpp-128.png';

class Header extends Component {
    render(){
        return (
            <header className="Header">
                <div className="top">
                    <div className="app-container">
                        <div className="left">
                            <Link to="/" className="nav-link">
                                <img src={logo} alt="Lee++ Logo" />
                            </Link>
                        </div>
                        <nav className="right">
                            <Link to="/" className="nav-link nav-right-link">Blog</Link>
                            <a href="https://github.com/LeePresswood" className="nav-link nav-right-link">GitHub</a>
                            <Link to="/about" className="nav-link nav-right-link">About</Link>
                        </nav>
                    </div>
                </div>
                <div className="bottom">
                    <div className="app-container">
                        <Link to="/" className="nav-category-link">Blog</Link>
                        <Link to="/" className="nav-category-link">Blog</Link>
                        <Link to="/" className="nav-category-link">Blog</Link>
                        <Link to="/" className="nav-category-link">Blog</Link>

                    </div>
                </div>
                
            </header>
        );
    }
}

export default Header;