import React, { Component } from "react";
import "../styles/Thanks.css";

export default class Thanks extends Component {
  constructor(props) {
    super(props);
    
    this.state = { on : false };
  }
  
  flip() {
    this.setState(prevState => ({
      ...this.state,
      on : !this.state.on
    }));
  }
  
  render() {
    return (
      <div className="thanks">
        <span>&lt;3</span>
      </div>
    );
  }
}