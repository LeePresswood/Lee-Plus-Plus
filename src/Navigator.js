import React, {Component} from 'react';
import {BrowserRouter as Router, Route, browserHistory, Switch} from 'react-router-dom';

import About from './pages/About'
import Blog from './pages/Blog'
import Topics from './pages/Topics'
import NotFound from './pages/NotFound'

class Navigator extends Component {
    render() {
        return (
            <div id="Navigator">
                <Router history={browserHistory}>
                    <Switch>
                        <Route exact path="/" component={Blog}/>
                        <Route exact path="/about" component={About}/>
                        <Route exact path="/blog/topics" component={Topics}/>
                        <Route exact path="/blog/topics/:tagId" component={Blog}/>
                        <Route exact path="/blog/:blogId" component={Blog}/>
                        {/*<Route exact path="/blog/topics" component={(props) => <Blog {...props} view="topics"/>}/>*/}
                        <Route path="*" component={NotFound}/>
                    </Switch>
                </Router>
                {/*https://reacttraining.com/react-router/web/guides/quick-start*/}

                {/*<Route exact path="/" component={About}/>*/}
                {/*<Route path="/blog" component={Blog}>*/}
                {/*<IndexRoute/>*/}
                {/*<Route exact path="/" component={Blog}/>*/}
                {/*<Route exact path="post/:postId" component={Blog}/>*/}
                {/*<Route exact path="topics" component={Blog}/>*/}
                {/*<Route exact path="random" component={Blog}/>*/}
                {/*</Route>*/}
                {/*<Route path='*' component={NotFound}/>*/}
            </div>
        );
    }
}

export default Navigator;