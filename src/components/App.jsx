import React, { Component } from 'react';
import HeaderNavigation from "./HeaderNavigation";
import HeaderCategories from "./HeaderCategories";
import SinglePostLayout from "../layouts/SinglePostLayout";
import MultiPostLayout from "../layouts/MultiPostLayout";
import { Route } from 'react-router-dom'
import Footer from "./Footer";
import '../styles/App.css';

class App extends Component {
    render(){
        return (
            <div className="App">
                <header className="Header">
                    <HeaderNavigation/>
                    <HeaderCategories/>
                </header>
                <main>
                    <Route exact path="/" component={MultiPostLayout}/>
                    <Route exact path="/pages/:pageId" component={MultiPostLayout}/>
                    <Route exact path="/posts/:postId" component={SinglePostLayout}/>
                </main>
                <Footer/>
            </div>
        );
    }
}

export default App;
