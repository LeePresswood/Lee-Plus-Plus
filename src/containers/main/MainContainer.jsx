import React, {Component} from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { agate } from 'react-syntax-highlighter/dist/styles';
import './MainContainer.css';

class MainContainer extends Component {
    render(){
        const codeString = 'var f = (num) => num + 1\nf();';
    
        return (
            <div className="MainContainer">
                <div className="blog-column box-with-shadow">
                    <div className="post-title-box">
                        <h1 className="title">Java Development Tutorial: Part 3</h1>
                        <h2 className="subtitle">The Garbage Collector</h2>
                    </div>
                    <div className="post-context-box">
                        <SyntaxHighlighter language='javascript' style={agate} showLineNumbers>{codeString}</SyntaxHighlighter>
                    </div>
                </div>
                <div className="about-me-column box-with-shadow">
                
                </div>
            </div>
        );
    }
}

export default MainContainer;
