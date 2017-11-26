import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchMultiPostAction } from "../actions/PostRequestActions";
import "../styles/MultiPostlayout.css";

class MultiPostLayout extends Component {
  componentWillMount() {
    this.props.loadPosts(this.props.match.params.pageId);
  }
  
  render() {
    return (
      <div className="MultiPostLayout app-container">
        { this.mapTitlesToCards() }
      </div>
    );
  }
  
  mapTitlesToCards() {
    console.dir(this.props);
    return this.props.loadedPosts && this.props.loadedPosts.map((post, index) => {
      return (
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
      );
    });
  }
}

const mapStateToProps = state => ({
  loadedPosts : state.postRequestReducer.loadedPosts,
  loading : state.postRequestReducer.loading,
});

const mapDispatchToProps = dispatch => ({
  loadPosts : (page) => dispatch(fetchMultiPostAction(page)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MultiPostLayout);