import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxPromise from "redux-promise";
import App from "./components/App";
import rootReducer from "./reducers";

const storeWithMiddleware = applyMiddleware(reduxPromise)(createStore);

ReactDOM.render(
  <Provider store={storeWithMiddleware(rootReducer)}>
    <HashRouter>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </HashRouter>
  </Provider>
  , 
  document.getElementById("root")
);