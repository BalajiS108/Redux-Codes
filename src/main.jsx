// import React from "react";
import ReactDOM from "react-dom/client";
// import Counter from "./Counter";
import "./index.css";
// import { store } from "./Store/Store.jsx";
import { Provider } from "react-redux";
// import { Counter } from "./features/counter/counter.jsx";
import store from "./Calculator/store";
import Calcultor from "./Calculator/Calcultor";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Calcultor />
  </Provider>
);
