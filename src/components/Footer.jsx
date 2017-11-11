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
        <ActiveTagColumn activeTags={ this.props.moreContent.activeTags } />
        <RandomTagColumn randomTags={ this.props.moreContent.randomTags } />
        <PopularPostColumn popularPosts={ this.props.moreContent.popularPosts } />
        <SocialColumn />
      </div>
    );
  }
}

class ActiveTagColumn extends Component {
  
  mapTagsToLinks() {
    return this.props.activeTags.map(tag => (
      <Link to={ `/tags/${tag.tagName}` } key={ tag.tagName }>{
        tag.tagName } <b>({ tag.tagCount })</b>
      </Link>
    ));
  }
  
  render() {
    return (
      <div className="column">
        <p>Active Tags</p>
        { this.props.activeTags && this.mapTagsToLinks() }
      </div>
    );
  }
}

class RandomTagColumn extends Component {
  
  mapTagsToLinks() {
    return this.props.randomTags.map(tag => (
      <Link to={ `/tags/${tag.tagName}` } key={ tag.tagName }>{
        tag.tagName } <b>({ tag.tagCount })</b>
      </Link>
    ));
  }
  
  render() {
    return (
      <div className="column">
        <p>Random Tags</p>
        { this.props.randomTags && this.mapTagsToLinks() }
      </div>
    );
  }
}

class PopularPostColumn extends Component {
  
  mapTagsToLinks() {
    return this.props.popularPosts.map(post => (
      <Link to={ `/tags/${post}` } key={ post }>
        { post }
      </Link>
    ));
  }
  
  render() {
    return (
      <div className="column">
        <p>Popular Posts</p>
        { this.props.popularPosts && this.mapTagsToLinks() }
      </div>
    );
  }
}

class SocialColumn extends Component {
  
  render() {
    return (
      <div className="column">
        <p>Social</p>
        <a href="https://twitter.com/">Twitter</a>
        <a href="https://github.com/LeePresswood">GitHub</a>
        <a href="https://www.linkedin.com/in/lee-presswood/">LinkedIn</a>
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