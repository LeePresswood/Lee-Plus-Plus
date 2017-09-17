import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import '../styles/Header.css';

class Header extends Component {
    render(){
        return (
            <header className="Navbar">
                <div className="app-container">
                    <div className="left">
                        <Link to="/" className="Name" >Lee</Link>
                    </div>
                    <nav className="right">
                        <Link to="/">Blog</Link>
                        <Link to="/">GitHub</Link>
                        <Link to="/">About</Link>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;