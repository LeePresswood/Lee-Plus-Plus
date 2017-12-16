import React, { Component } from "react";
import { connect } from "react-redux";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierCaveLight } from "react-syntax-highlighter/styles/hljs";
import { fetchSinglePostAction } from "../actions/PostRequestActions";
import "../styles/SinglePostLayout.css";
import { ActionTagButton } from "./ActionButton";
import LanguageFlair from "./LanguageFlair";
import Loader from "./Loader";
import Thanks from "./Thanks";

class SinglePostLayout extends Component {
  
  componentWillMount() {
    this.props.loadPost(this.props.match.params.postId);
  }
  
  render() {
    let toRender = this.props.loading || !(this.props.header_details && this.props.bodies) ?
      <Loader /> :
      <div>
        <ColorBanner title={ this.props.header_details.title } />
        <ContentContainer header_details={ this.props.header_details } tags={ this.props.tags } bodies={ this.props.bodies } />
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
      <div className="color-banner">
        <div className="app-container">
          { this.props.title && <p className="title">{ this.props.title }</p> }
        </div>
        <div className="reserve" />
      </div>
    );
  }
}

class ContentContainer extends Component {
  
  getDateString(utcTime) {
    let options = { year : "numeric", month : "numeric", day : "numeric", timeZone : "America/Chicago" };
    return new Date(utcTime).toLocaleString("en-US", options);
  }
  
  render() {
    const creationDate = this.props.header_details.creation_date &&
      <p className="date-time">By <b>Lee
                                     Presswood</b> on <i>{ this.getDateString(this.props.header_details.creation_date) }</i>
      </p>;
  
    // const updateDate = this.props.header_details.update_date &&
    //   <p className="date-time">Update Date: { this.getDateString(this.props.header_details.update_date) }</p>;
    
    const description = this.props.header_details.description &&
      <p className="description">{ this.props.header_details.description }</p>;
    
    const tags = this.props.tags && this.props.tags.map((tag, index) =>
      <ActionTagButton to={ `/?tagId=${tag.id}` } key={ index } text={ tag.value } />);
    
    const paragraphs = this.props.bodies && this.props.bodies.map((segment, index) => {
      if(segment.is_code){
        return (
          <SyntaxHighlighter
            key={ index }
            language={ segment.code_language }
            style={ atelierCaveLight }
            showLineNumbers
          >{ segment.body }</SyntaxHighlighter>
        );
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
    
    return (
      <div className="content-container app-container">
        <div className="description-section">
          <div className="info-box">
            <LanguageFlair bodies={ this.props.bodies } />
    
            <div className="description-box">
              { creationDate }
              { description }
            </div>
  
            <Thanks />
          </div>
  
          <div className="tag-box">
            { tags }
          </div>
        </div>
  
        <div className="content-section">
          { paragraphs }
        </div>
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