import axios from "axios";
import createHistory from "history/createBrowserHistory";
import { routerMiddleware } from "react-router-redux";
import { applyMiddleware, compose, createStore } from "redux";
import axiosMiddleware from "redux-axios-middleware";
import thunk from "redux-thunk";
import rootReducer from "../reducers/index";

export const history = createHistory();

const client = axios.create({
  // baseURL : 'http://localhost:3001',
  baseURL : "http://leeplusplus-service.azurewebsites.net",
  responseType : "json"
});

const initialState = {};
const enhancers = [];
const middleware = [
  thunk,
  axiosMiddleware(client),
  routerMiddleware(history)
];

if(process.env.NODE_ENV === "development"){
  const devToolsExtension = window.devToolsExtension;
  
  if(typeof devToolsExtension === "function"){
    enhancers.push(devToolsExtension());
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

export default store;