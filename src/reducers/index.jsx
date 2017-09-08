import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import postRequestReducer from "./PostRequestReducer";

export default combineReducers({
    routing : routerReducer,
    postRequestReducer
})