import PropTypes from "prop-types";
import React, { Component } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { monoBlue } from "react-syntax-highlighter/dist/styles";
import "../styles/ArticleBox.css";

class ArticleBox extends Component {
  mapParagraphsToTags() {
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
      <div className="ArticleBox">
        <div className="titleSection">
          <h1>{ this.props.title }</h1>
          <p>{ this.props.subtitle }</p>
          <p>{ this.props.dateTime }</p>
        </div>
        <div className="contentSection">
          { this.mapParagraphsToTags() }
        </div>
      </div>
    );
  }
}

ArticleBox.propTypes = {
  title : PropTypes.string,
  subtitle : PropTypes.string,
  dateTime : PropTypes.string,
  body : PropTypes.arrayOf(PropTypes.object),
};

export default ArticleBox;
