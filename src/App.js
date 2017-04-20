import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';

import './App.css';
import HelloWorldList from './helloworldlist/HelloWorldList';

const App = () => {
    return (
        <Router>
            <Route path="/" component={Main} path="app">
                <IndexRoute component={Home}/>
                <Route path="/cars" component={Car}/>
                <Route path="/about" component={About}/>
            </Route>
        </Router>
    );
};

export default App;
