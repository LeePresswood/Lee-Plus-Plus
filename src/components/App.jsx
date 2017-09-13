import React, { Component } from 'react';
import Navbar from "./Navbar";
import MainContainer from "../containers/MainContainer";
import { Route } from 'react-router-dom'
import Footer from "./Footer";

class App extends Component {
    render(){
        return (
            <div className="App">
                <Navbar/>
                <main>
                    <Route exact path="/" component={MainContainer}/>
                    <Route exact path="/1" component={MainContainer}/>
                </main>
                <Footer/>
            </div>
        );
    }
}

export default App;
