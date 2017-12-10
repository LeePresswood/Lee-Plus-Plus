import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchMultiPostAction } from "../actions/PostRequestActions";
import "../styles/MultiPostlayout.css";
import Loader from "./Loader";

class MultiPostLayout extends Component {
  componentWillMount() {
    this.props.loadPosts(this.props.match.params.pageId, this.props.match.params.tagId);
  }
  
  render() {
    console.dir(this.props);
    let titles = this.props.loadedPosts && this.props.loadedPosts.map((post, index) => (
      <PostTitles key={ index } id={ post.id } title={ post.title } creation_date={ post.creation_date } />
    ));
  
    let toRender = this.props.loading || !titles ? <Loader /> : titles;
    
    return (
      <div className="MultiPostLayout app-container">
        { toRender }
      </div>
    );
  }
}

class PostTitles extends Component {
  render() {
    return (
      <div>
        <Link to={ `/posts/${this.props.id}` }>
          { this.props.title }
        </Link>
        <br />
        <Link to={ `/posts/${this.props.id}` }>
          { this.props.creation_date }
        </Link>
        <br /><br /><br />
      </div>
    );
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