import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import '../../styles/Navbar.css';

class Navbar extends Component {
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

export default Navbar;