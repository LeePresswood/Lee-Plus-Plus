import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter";
import { monoBlue } from "react-syntax-highlighter/dist/styles";
import { fetchSinglePostAction } from "../actions/PostRequestActions";
import "../styles/SinglePostLayout.css";

class SinglePostLayout extends Component {
  mapTagsToHtml() {
    return this.props.tags.map((tag, index) => <Link to="/" className="action bordered tag">{ tag }</Link>);
  }
  
  mapParagraphsToHtml() {
    return this.props.body.map((segment, index) => {
      if(segment.isCode){
        return <SyntaxHighlighter
          key={ index }
          language={ segment.language }
          style={ monoBlue }
          showLineNumbers
        >{ segment.text }</SyntaxHighlighter>;
      }
      else if(segment.isHeader){
        return <h2
          key={ index }>{ segment.text }</h2>;
      }
      else{
        return <p
          key={ index }>{ segment.text }</p>;
      }
    });
  }
  
  componentWillMount() {
    this.props.loadPost(this.props.match.params.postId);
  }
  
  render() {
    return (
      <div className="app-container">
        <div className="titleSection">
          <p className="dateTime">{ this.props.dateTime }</p>
          <h1 className="title">{ this.props.title }</h1>
          <div className="tagBox">
            { this.mapTagsToHtml() }
          </div>
        </div>
        <div className="contentSection">
          { this.mapParagraphsToHtml() }
        </div>
      </div>
    );
  }
}

SinglePostLayout.propTypes = {
  title : PropTypes.string,
  dateTime : PropTypes.string,
  tags : PropTypes.arrayOf(PropTypes.string),
  body : PropTypes.arrayOf(PropTypes.object),
  loading : PropTypes.bool
};

const mapStateToProps = state => ({
  title : state.postRequestReducer.title,
  dateTime : state.postRequestReducer.dateTime,
  tags : state.postRequestReducer.tags,
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