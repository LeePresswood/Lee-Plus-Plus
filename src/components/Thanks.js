import React, { Component } from "react";
import off from "../img/heart-empty.png";
// import { Link } from "react-router-dom";
import on from "../img/heart-filled.png";
import "../styles/Thanks.css";

class Thanks extends Component {
  state = { on : false };
  
  flip = () => {
    this.setState(prevState => ({ ...prevState, on : !prevState.on }));
  };
  
  render() {
    return (
      <div className="thanks" onClick={ this.flip }>
        <img className="floater" src={ this.state.on ? on : off } alt="Lee++ Logo" />
        <img className={ this.state.on ? "on" : "off" } src={ this.state.on ? on : off } alt="Lee++ Logo" />
      </div>
    );
  }
}

export default Thanks;