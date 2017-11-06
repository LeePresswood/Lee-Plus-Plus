import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSinglePostAction } from "../actions/PostRequestActions";
import ArticleBox from "../components/ArticleBox";

class SinglePostLayout extends Component {
  componentWillMount() {
    this.props.loadPost(this.props.match.params.postId);
  }
  
  render() {
    return (
      <div className="app-container">
        { /*<PostTitleBox*/ }
        { /*title={this.props.title}*/ }
        { /*subtitle={this.props.subtitle}*/ }
        { /*dateTime={this.props.dateTime}/>*/ }
        <ArticleBox
          title={ this.props.title }
          subtitle={ this.props.subtitle }
          dateTime={ this.props.dateTime }
          body={ this.props.body } />
      </div>
    );
  }
}

SinglePostLayout.propTypes = {
  title : PropTypes.string,
  subtitle : PropTypes.string,
  dateTime : PropTypes.string,
  body : PropTypes.arrayOf(PropTypes.object),
  loading : PropTypes.bool
};

const mapStateToProps = state => ({
  title : state.postRequestReducer.title,
  subtitle : state.postRequestReducer.subtitle,
  dateTime : state.postRequestReducer.dateTime,
  body : state.postRequestReducer.body,
  loading : state.postRequestReducer.loading,
});

const mapDispatchToProps = dispatch => {
  return {
    loadPost : (postId) => dispatch(fetchSinglePostAction(postId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SinglePostLayout);