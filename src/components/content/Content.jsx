import React, {Component} from 'react';
import './Content.css';
import MainContainer from "../../containers/main/MainContainer";
import {Route} from 'react-router-dom'

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
