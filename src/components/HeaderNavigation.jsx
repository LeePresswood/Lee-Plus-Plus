import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../img/lpp-128.png";
import "../styles/HeaderNavigation.css";

class HeaderNavigation extends Component {
  render() {
    return (
      <div className="HeaderNavigation">
        <div className="header-container">
          <div className="left">
            <Link to="/">
              <img src={ logo } alt="Lee++ Logo"/>
            </Link>
          </div>
          <nav className="right">
            <Link to="/" className="action bordered">Blog</Link>
            <a href="https://github.com/LeePresswood" className="action bordered">GitHub</a>
            <Link to="/about" className="action bordered">About</Link>
          </nav>
        </div>
      </div>
    );
  }
}

export default HeaderNavigation;