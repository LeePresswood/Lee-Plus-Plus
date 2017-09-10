import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {agate} from 'react-syntax-highlighter/dist/styles';
import '../styles/PostContentBox.css';

class PostContentBox extends Component {
    render(){
        const codeString = 'var f = (num) => num + 1;\nf();';
        
        return (
            <div className="PostContentBox">
                {this.props.body}
                <p>Here's some text that will eventually wrap. If it doesn't wrap, we'll have some problems. If it does
                   wrap, we're good.</p>
                {/*<SyntaxHighlighter language='javascript' style={agate} showLineNumbers>{codeString}</SyntaxHighlighter>*/}
                <SyntaxHighlighter language="javascript" style={agate}>{codeString}</SyntaxHighlighter>
                <p>Here's some text after the lines of code. Typically, we'll be explaining the code that we just
                   saw.</p>
            </div>
        );
    }
}

PostContentBox.propTypes = {
    body : PropTypes.string
};

export default PostContentBox;
