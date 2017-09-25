import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../styles/Header.css';
import logo from '../img/lpp-128.png';
import HeaderCategories from "./HeaderCategories";

class Header extends Component {
    render(){
        return (
            <header className="Header">
                <div className="top">
                    <div className="app-container">
                        <div className="left">
                            <Link to="/">
                                <img src={logo} alt="Lee++ Logo"/>
                            </Link>
                        </div>
                        <nav className="right">
                            <Link to="/">Blog</Link>
                            <a href="https://github.com/LeePresswood">GitHub</a>
                            <Link to="/about">About</Link>
                        </nav>
                    </div>
                </div>
                <HeaderCategories/>
            </header>
        );
    }
}

export default Header;