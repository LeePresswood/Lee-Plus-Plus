import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchMoreContentAction } from "../actions/MoreContentAction";
import "../styles/Footer.css";

class Footer extends Component {
  
  componentWillMount() {
    this.props.loadMoreContent();
  }
  
  render() {
    return (
      <div className="header-container">
        <ActiveTagColumn tags={ this.props.moreContent.tags } />
        <PopularPostColumn />
        <LikedPostColumn />
        <ConnectColumn />
      </div>
    );
  }
}

class ActiveTagColumn extends Component {
  
  mapTagsToLinks() {
    return this.props.tags.map(tag => (
      <Link to={ `/tags/${tag.tagName}` } key={ tag.tagName }>{
        tag.tagName } <b>({ tag.tagCount })</b>
      </Link>
    ));
  }
  
  render() {
    return (
      <div className="column">
        <p>Active Tags</p>
        { this.props.tags && this.mapTagsToLinks() }
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
  moreContent : state.moreContentReducer.moreContent,
});

const mapDispatchToProps = dispatch => ({
  loadMoreContent : () => dispatch(fetchMoreContentAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);