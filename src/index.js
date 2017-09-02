import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux'

import store, {history} from './store/index'

import App from './components/App'
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <App/>
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();



