import React, {Component} from 'react';
import {Route} from 'react-router-dom'

import Home from '../home/Home'
// import Home from '../home/Home'
// import Home from '../home/Home'

class Navigator extends Component {
    render() {
        return (
            <div className="Navigator">
                <Route exact path="/" component={Home}/>
                {/*<Route path="/about" component={About}/>*/}
                {/*<Route path="/topics" component={Topics}/>*/}
            </div>
        );
    }
}

export default Navigator;