import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import App from "../App.tsx";
import Home from "../pages/Home.tsx";
import PlanATrip from "../pages/planATrip.tsx";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/home" element={<Home />} />
          <Route path="/plan-a-trip" element={<PlanATrip />} />
        </Route>
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
