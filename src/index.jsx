import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxPromise from "redux-promise";
import App from "./components/App";
import rootReducer from "./reducers";

const storeWithMiddleware = applyMiddleware(reduxPromise)(createStore);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={storeWithMiddleware(rootReducer)}>
      <Route exact path="/" component={App} />
    </Provider>
  </BrowserRouter>
  ,
  document.getElementById("root")
);