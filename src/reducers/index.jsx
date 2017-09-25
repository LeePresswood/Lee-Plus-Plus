import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import categoryReducer from "./CategoryReducer";
import postRequestReducer from "./PostRequestReducer";

export default combineReducers({
    routing : routerReducer,
    categoryReducer,
    postRequestReducer
})