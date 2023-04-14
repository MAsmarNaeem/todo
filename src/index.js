import React from "react";
import ReactDOM from "react-dom";
import Todo from "./Components/Todo";
import { Provider } from "react-redux";
import store from "./Store/Store";
import App from "./App";
// import Layout from "./Layout";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
