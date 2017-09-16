import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import '../styles/Header.css';

class Header extends Component {
    render(){
        return (
            <header className="Navbar">
                <div className="app-container">
                    <div className="left">
                        <Link className="Name" to="/">Lee++</Link>
                    </div>
                    <div className="right">
                        <Link to="/">Home</Link>
                        <Link to="/">Home</Link>
                        <Link to="/">Home</Link>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;