import React, {Component} from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { agate } from 'react-syntax-highlighter/dist/styles';
import './MainContainer.css';

class MainContainer extends Component {
    render(){
        const codeString = 'var f = (num) => num + 1;\nf();';
    
        return (
            <div className="MainContainer">
                <div className="blog-column box-with-shadow">
                    <div className="post-title-box">
                        <h1 className="title">Java Development Tutorial: Part 3</h1>
                        <h2 className="subtitle">The Garbage Collector</h2>
                        <h5 className="date-time">08/27/2017</h5>
                    </div>
                    <div className="post-context-box">
                        <p>Here's some text that will eventually wrap. If it doesn't wrap, we'll have some problems. If it does wrap, we're good.</p>
                        {/*<SyntaxHighlighter language='javascript' style={agate} showLineNumbers>{codeString}</SyntaxHighlighter>*/}
                        <SyntaxHighlighter language='javascript' style={agate}>{codeString}</SyntaxHighlighter>
                        <p>Here's some text after the lines of code. Typically, we'll be explaining the code that we just saw.</p>
                    </div>
                </div>
                <div className="about-me-column box-with-shadow">
                
                </div>
            </div>
        );
    }
}

export default MainContainer;
