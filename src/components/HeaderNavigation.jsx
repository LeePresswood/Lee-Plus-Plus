import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../styles/HeaderNavigation.css';
import logo from '../img/lpp-128.png';

class HeaderNavigation extends Component{
    render(){
        return (
            <div className="HeaderNavigation top">
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
        );
    }
}

export default HeaderNavigation;