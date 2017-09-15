import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import '../styles/Header.css';

class Header extends Component {
    render(){
        return (
            <header className="Navbar">
                <div className="app-container">
                    <Link to="/">Home</Link>
                </div>
            </header>
        );
    }
}

export default Header;