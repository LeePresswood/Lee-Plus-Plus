import React, { Component } from 'react';
import HeaderNavigation from "./HeaderNavigation";
import HeaderCategories from "./HeaderCategories";
import SinglePostLayout from "../layouts/SinglePostLayout";
import MultiPostLayout from "../layouts/MultiPostLayout";
import { Route } from 'react-router-dom'
import '../styles/App.css';

class App extends Component {
    render(){
        return (
            <div className="App">
                <header>
                    <HeaderNavigation/>
                    <HeaderCategories/>
                </header>
                <main>
                    <Route exact path="/" component={MultiPostLayout}/>
                    <Route exact path="/pages/:pageId" component={MultiPostLayout}/>
                    <Route exact path="/posts/:postId" component={SinglePostLayout}/>
                </main>
                <footer>
                    Footer here
                </footer>
            </div>
        );
    }
}

export default App;
