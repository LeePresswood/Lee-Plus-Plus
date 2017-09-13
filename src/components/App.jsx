import React, { Component } from 'react';
import Navbar from "./Navbar";
import MultiPostLayout from "../layouts/MultiPostLayout";
import { Route } from 'react-router-dom'
import Footer from "./Footer";

class App extends Component {
    render(){
        return (
            <div className="App">
                <Navbar/>
                <main>
                    <Route exact path="/" component={MultiPostLayout}/>
                    <Route exact path="/1" component={MultiPostLayout}/>
                </main>
                <Footer/>
            </div>
        );
    }
}

export default App;
