import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../img/lpp-128.png";
import "../styles/HeaderNavigation.css";
import ActionButton, { ActionAButton } from "./ActionButton";

class HeaderNavigation extends Component {
  render() {
    return (
      <div className="HeaderNavigation">
        <div className="header-container">
          <div className="left">
            <Link to="/">
              { /*<span className="headline">Lee++</span>*/ }
              { /*<span className="headline-background"/>*/ }
              <img src={ logo } alt="Lee++ Logo" />
            </Link>
          </div>
          <nav className="right">
            <ActionButton to="/" text="Blog" isdark="true" />
            <ActionAButton to="https://github.com/LeePresswood" text="GitHub" isdark="true" />
            <ActionButton to="/about" text="About" isdark="true" />
          </nav>
        </div>
      </div>
    );
  }
}

export default HeaderNavigation;