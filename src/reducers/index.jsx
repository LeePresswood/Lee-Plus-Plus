import { routerReducer } from "react-router-redux";
import { combineReducers } from "redux";
import moreContentReducer from "./MoreContentReducer";
import postRequestReducer from "./PostRequestReducer";

export default combineReducers({
  routing : routerReducer,
  moreContentReducer,
  postRequestReducer
});