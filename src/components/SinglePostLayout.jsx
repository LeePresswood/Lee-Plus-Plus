import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter";
import { monoBlue } from "react-syntax-highlighter/dist/styles";
import { fetchSinglePostAction } from "../actions/PostRequestActions";
import "../styles/SinglePostLayout.css";
import Loader from "./Loader";

class SinglePostLayout extends Component {
  
  componentWillMount() {
    this.props.loadPost(this.props.match.params.postId);
  }
  
  render() {
    let toRender = this.props.loading ?
      <Loader /> :
      <div>
        <ColorBanner header_details={ this.props.header_details } />
        <div className="content-container app-container">
          <ContentHeader tags={ this.props.tags } header_details={ this.props.header_details } />
          <ContentBody bodies={ this.props.bodies } />
        </div>
      </div>;
  
    return (
      <div>
        { toRender }
      </div>
    );
  }
}

class ColorBanner extends Component {
  
  render() {
    return (
      <div className="header_section">
        <div className="app-container">
          { this.props.header_details.title && <h1 className="title">{ this.props.header_details.title }</h1> }
        </div>
        <div className="reserve" />
      </div>
    );
  }
}

class ContentHeader extends Component {
  
  static getDateString(utcTime) {
    let options = { year : "numeric", month : "numeric", day : "numeric", timeZone : "America/Chicago" };
    return new Date(utcTime).toLocaleString("en-US", options);
  }
  
  mapTagsToHtml() {
    return this.props.tags && this.props.tags.map((tag, index) =>
      <Link to={ `/pages/1?tagId=${tag.id}` } key={ index } className="action bordered tag">{ tag.value }</Link>);
  }
  
  render() {
    return (
      <div className="title-section">
        { this.props.header_details.creation_date &&
        <p className="date-time">{ ContentHeader.getDateString(this.props.header_details.creation_date) }</p> }
        { this.props.header_details.update_date &&
        <p className="date-time">{ ContentHeader.getDateString(this.props.header_details.update_date) }</p> }
        { this.props.header_details.title && <p className="title">{ this.props.header_details.title }</p> }
        <div className="tag-box">
          { this.mapTagsToHtml() }
        </div>
      </div>
    );
  }
}

class ContentBody extends Component {
  
  mapParagraphsToHtml() {
    return this.props.bodies && this.props.bodies.map((segment, index) => {
      if(segment.is_code){
        return <SyntaxHighlighter
          key={ index }
          language={ segment.code_language }
          style={ monoBlue }
          showLineNumbers
        >{ segment.body }</SyntaxHighlighter>;
      }
      else if(segment.is_header){
        return <h2
          key={ index }>{ segment.body }</h2>;
      }
      else{
        return <p
          key={ index }>{ segment.body }</p>;
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
  tags : state.posts.tags,
  header_details : state.posts.header_details,
  bodies : state.posts.bodies,
  loading : state.posts.loading,
});

const mapDispatchToProps = dispatch => ({
  loadPost : (postId) => dispatch(fetchSinglePostAction(postId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SinglePostLayout);