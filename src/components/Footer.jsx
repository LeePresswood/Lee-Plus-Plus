import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

class Footer extends Component {
  
  render() {
    return (
      <div className="header-container">
        <ActiveTagColumn />
        <PopularPostColumn />
        <LikedPostColumn />
        <ConnectColumn />
      </div>
    );
  }
}

class ActiveTagColumn extends Component {
  
  mapTagsToLinks() {
    let tags = [
      {
        tagName : "Java",
        tagCount : 30
      },
      {
        tagName : "Javascript",
        tagCount : 28
      },
      {
        tagName : "Kotlin",
        tagCount : 20
      },
      {
        tagName : "Groovy",
        tagCount : 15
      },
      {
        tagName : "React",
        tagCount : 10
      },
      {
        tagName : "HTML",
        tagCount : 5
      },
    ];
    
    return tags.map(tag => {
      return (
        <Link to={ `/tags/${tag.tagName}` } key={ tag.tagName }>{
          tag.tagName } <b>({ tag.tagCount })</b>
        </Link>);
    });
  }
  
  render() {
    return (
      <div className="column">
        <p>Active Tags</p>
        { this.mapTagsToLinks() }
      </div>
    );
  }
}

class PopularPostColumn extends Component {
  
  render() {
    return (
      <div className="column">
        <p>Popular Posts</p>
      </div>
    );
  }
}

class LikedPostColumn extends Component {
  
  render() {
    return (
      <div className="column">
        <p>Liked Posts</p>
      </div>
    );
  }
}

class ConnectColumn extends Component {
  
  render() {
    return (
      <div className="column">
        <p>Connect</p>
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