import axios from "axios";
import createHistory from "history/createBrowserHistory";
import { routerMiddleware, routerReducer } from "react-router-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import axiosMiddleware from "redux-axios-middleware";
import thunk from "redux-thunk";
import reducers from "../reducers/index";

// if(process.env.NODE_ENV === "development"){
//   const devToolsExtension = window.devToolsExtension;
//
//   if(typeof devToolsExtension === "function"){
//     enhancers.push(devToolsExtension());
//   }
// }

const client = axios.create({
  // baseURL : "http://localhost:3001",
  baseURL : "https://leeplusplus-service.azurewebsites.net",
  responseType : "json"
});

export const history = createHistory({
  basename : "/Lee-Plus-Plus"
});

const middleware = [
  routerMiddleware(history),
  thunk,
  axiosMiddleware(client),
];

const store = createStore(
  combineReducers({
    ...reducers,
    router : routerReducer
  }),
  applyMiddleware(...middleware)
);

export default store;