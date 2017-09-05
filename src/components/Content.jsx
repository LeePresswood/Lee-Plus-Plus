import React, {Component} from 'react';
import MainContainer from "../containers/main/MainContainer";
import {Route} from 'react-router-dom'
import '../styles/Content.css';

class Content extends Component {
    render(){
        return (
            <main className="Content">
                <div className="color-banner">
                </div>
                <div className="app-container">
                    <Route exact path="/" component={MainContainer}/>
                    <Route exact path="/1" component={MainContainer}/>
                </div>
            </main>
        );
    }
}

export default Content;
