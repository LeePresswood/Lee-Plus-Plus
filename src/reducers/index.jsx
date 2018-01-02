import { routerReducer } from "react-router-redux";
import moreContentReducer from "./MoreContentReducer";
import postRequestReducer from "./PostRequestReducer";

export default {
  routing : routerReducer,
  moreContent : moreContentReducer,
  posts : postRequestReducer
};