import React, { Component } from 'react';
import Header from "./Header";
import SinglePostLayout from "../layouts/SinglePostLayout";
import MultiPostLayout from "../layouts/MultiPostLayout";
import { Route } from 'react-router-dom'
import Footer from "./Footer";
import '../styles/App.css';

class App extends Component {
    render(){
        return (
            <div className="App">
                <Header/>
                <main>
                    <Route exact path="/" component={MultiPostLayout}/>
                    <Route exact path="/:postId" component={SinglePostLayout}/>
                </main>
                <Footer/>
            </div>
        );
    }
}

export default App;
