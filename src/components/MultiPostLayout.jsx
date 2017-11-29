import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchMultiPostAction } from "../actions/PostRequestActions";
import "../styles/MultiPostlayout.css";

class MultiPostLayout extends Component {
  componentWillMount() {
    this.props.loadPosts(this.props.match.params.pageId, this.props.match.params.tagId);
  }
  
  render() {
    return (
      <div className="MultiPostLayout app-container">
        { this.mapTitlesToCards() }
      </div>
    );
  }
  
  mapTitlesToCards() {
    return this.props.loadedPosts && this.props.loadedPosts.map((post, index) => (
      <div
        key={ index }>
        <Link to={ `/posts/${post.id}` }>
          { post.title }
        </Link>
        <br />
        <Link to={ `/posts/${post.id}` }>
          { post.creation_date }
        </Link>
        <br /><br /><br />
      </div>
    ));
  }
}

const mapStateToProps = state => ({
  loadedPosts : state.posts.loadedPosts,
  loading : state.posts.loading,
});

const mapDispatchToProps = dispatch => ({
  loadPosts : (page, tagId) => dispatch(fetchMultiPostAction(page, tagId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MultiPostLayout);