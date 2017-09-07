import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import axios from "./axios";

export default combineReducers({
    routing : routerReducer,
    axios
})