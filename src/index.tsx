import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./components/App/App";
import {
  BrowserRouter, 
  Route, Routes
} from "react-router-dom";
import { Provider } from "react-redux";
import { setupStore } from "./services/store/store";
const store = setupStore()

ReactDOM.render(
<Provider store={store}>
  <BrowserRouter>
  <App/>
  </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
