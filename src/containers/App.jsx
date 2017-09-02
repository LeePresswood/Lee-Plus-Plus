import React from 'react';
import {Link, Route} from 'react-router-dom'
import MainContainer from './main/MainContainer'
import './App.css';

// import About from '../about'

const App = () => (
    <div className="App">
        <header>
            <div className="app-container">
                <Link to="/">Home</Link>
            </div>
        </header>
        
        <main>
            <div className="color-banner">
            </div>
            <div className="app-container">
                <Route exact path="/" component={MainContainer}/>
            </div>
        </main>
        
        <footer>
            <div className="app-container">
                <hr/>
                Made by Lee Presswood
            </div>
        </footer>
    </div>
)

export default App;