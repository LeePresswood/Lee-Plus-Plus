import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import '../styles/Header.css';
import logo from '../img/lpp-t-128.png';
import logo_smaller from '../img/lpp-t-64.png';

class Header extends Component {
    
    render(){
        return (
            <header className="Navbar">
                <div className="app-container">
                    <div className="left">
                        <Link to="/" className="Name">
                            <img src={logo} alt="Lee++ Logo" />
                        </Link>
                    </div>
                    <nav className="right">
                        <Link to="/">Blog</Link>
                        <a href="https://github.com/LeePresswood">GitHub</a>
                        <Link to="/about">About</Link>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;