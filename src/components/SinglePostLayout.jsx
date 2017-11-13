import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter";
import { monoBlue } from "react-syntax-highlighter/dist/styles";
import { fetchSinglePostAction } from "../actions/PostRequestActions";
import "../styles/SinglePostLayout.css";

class SinglePostLayout extends Component {
  
  componentWillMount() {
    this.props.loadPost(this.props.match.params.postId);
  }
  
  render() {
    return (
      <div className="app-container">
        <ContentHeader title={ this.props.title } dateTime={ this.props.dateTime } tags={ this.props.tags } />
        <ContentBody body={ this.props.body } />
      </div>
    );
  }
}

class ContentHeader extends Component {
  
  mapTagsToHtml() {
    return this.props.tags.map((tag, index) =>
      <Link to="/" key={ index } className="action bordered tag">{ tag }</Link>);
  }
  
  render() {
    return (
      <div className="title-section">
        <p className="date-time">{ this.props.dateTime }</p>
        <h1 className="title">{ this.props.title }</h1>
        <div className="tag-box">
          { this.mapTagsToHtml() }
        </div>
      </div>
    );
  }
}

class ContentBody extends Component {
  
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
  
  render() {
    return (
      <div className="content-section">
        { this.mapParagraphsToHtml() }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  title : state.postRequestReducer.title,
  dateTime : state.postRequestReducer.dateTime,
  tags : state.postRequestReducer.tags,
  body : state.postRequestReducer.body,
  loading : state.postRequestReducer.loading,
});

const mapDispatchToProps = dispatch => ({
  loadPost : (postId) => dispatch(fetchSinglePostAction(postId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SinglePostLayout);