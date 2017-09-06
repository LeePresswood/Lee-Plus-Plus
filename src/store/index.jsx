import {applyMiddleware, compose, createStore} from 'redux'
import {routerMiddleware} from 'react-router-redux'
import thunk from 'redux-thunk'
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import createHistory from 'history/createBrowserHistory'
import rootReducer from '../reducers/index'

export const history = createHistory();

const client = axios.create({ //all axios can be used, shown in axios documentation
    baseURL : 'http://localhost:3001/',
    responseType : 'json'
});

const initialState = {};
const enhancers = [];
const middleware = [
    thunk,
    axiosMiddleware(client),
    routerMiddleware(history)
];

if(process.env.NODE_ENV === 'development'){
    const devToolsExtension = window.devToolsExtension;
    
    if(typeof devToolsExtension === 'function'){
        enhancers.push(devToolsExtension())
    }
}

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
);

const store = createStore(
    rootReducer,
    initialState,
    composedEnhancers
);

export default store