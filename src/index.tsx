import React from "react";
import ReactDOM from "react-dom/client";
import "./output.css";
import AppRouter from "./router/router.tsx";
import { Provider } from "react-redux";
import store from "./Redux/store.tsx";

const root = ReactDOM.createRoot(document.getElementById("root") as any);
root.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
