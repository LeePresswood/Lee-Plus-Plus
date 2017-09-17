import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import '../styles/Header.css';

class Header extends Component {
    render(){
        return (
            <header className="Navbar">
                <div className="app-container">
                    <div className="left">
                        <Link to="/" className="Name">Lee++</Link>
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