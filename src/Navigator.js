import React, {Component} from 'react';
import {Route} from 'react-router-dom'

import Home from './pages/Home'
import Discover from './pages/Discover'
import Author from './pages/Author'
import Topic from './pages/Topic'

class Navigator extends Component {
    render() {
        return (
            <div id="Navigator">
                {/*https://reacttraining.com/react-router/web/guides/quick-start*/}

                {/*<Route exact path="/" component={Home}/>*/}
                <Route exact path="/" component={Home}/>
                <Route exact path="/discover" component={Discover}/>
                <Route exact path="/authors" component={Author}/>
                <Route exact path="/topics" component={Topic}/>
                {/*<Route path="/topics" component={Topics}/>*/}
            </div>
        );
    }
}

export default Navigator;