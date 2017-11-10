import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

class Footer extends Component {
  
  render() {
    return (
      <div className="header-container">
        <div className="column">
          <p>Active Tags</p>
          <Link to="/">
            Java <b>(30)</b>
          </Link>
          <Link to="/">
            Javascript <b>(28)</b>
          </Link>
          <Link to="/">
            Kotlin <b>(20)</b>
          </Link>
          <Link to="/">
            Groovy <b>(15)</b>
          </Link>
          <Link to="/">
            React <b>(10)</b>
          </Link>
          <Link to="/">
            HTML <b>(5)</b>
          </Link>
        </div>
        <div className="column">
          <p>Popular Posts</p>
        </div>
        <div className="column">
          <p>Liked Posts</p>
        </div>
        <div className="column">
          <p>Connect</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  // title : state.postRequestReducer.title,
  // dateTime : state.postRequestReducer.dateTime,
  // tags : state.postRequestReducer.tags,
  // body : state.postRequestReducer.body,
  // loading : state.postRequestReducer.loading,
});

const mapDispatchToProps = dispatch => {
  return {
    // loadPost : (postId) => dispatch(fetchSinglePostAction(postId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);