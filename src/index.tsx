import React from "react";
import ReactDOM from "react-dom/client";
import "./output.css";
import AppRouter from "./router/router.tsx";

const root = ReactDOM.createRoot(document.getElementById("root") as any);
root.render(<AppRouter />);
