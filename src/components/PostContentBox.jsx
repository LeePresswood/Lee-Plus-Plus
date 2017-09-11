import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {agate} from 'react-syntax-highlighter/dist/styles';
import '../styles/PostContentBox.css';

class PostContentBox extends Component {
    mapParagraphsToTags(){
        return this.props.body.map(segment => {
            if(!segment.language)
                return <p>{"" + segment.text}</p>;
            return <SyntaxHighlighter language={segment.language} style={agate}>{segment.text}</SyntaxHighlighter>;
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
    body : PropTypes.array
};

export default PostContentBox;
