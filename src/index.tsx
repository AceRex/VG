import React from "react";
import ReactDOM from "react-dom/client";
import "./output.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root") as any);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
