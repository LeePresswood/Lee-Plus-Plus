import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { railscasts } from 'react-syntax-highlighter/dist/styles';
import '../styles/PostContentBox.css';

class PostContentBox extends Component {
    mapParagraphsToTags(){
        return this.props.body.map((segment, index) =>{
            if(segment.isCode){
                return <SyntaxHighlighter
                    key={index}
                    language={segment.language}
                    style={railscasts}
                    showLineNumbers
                >{segment.text}</SyntaxHighlighter>;
            }
            else if(segment.isHeader){
                return <h1
                    key={index}>{segment.text}</h1>;
            }
            else{
                return <p
                    key={index}>{segment.text}</p>;
            }
        })
    }
    
    render(){
        return (
            <div className="PostContentBox">
                {this.mapParagraphsToTags()}
            </div>
        );
    }
}

PostContentBox.propTypes = {
    body : PropTypes.arrayOf(PropTypes.object),
};

export default PostContentBox;
