import React from "react";
import Header from "./components/shared/header.tsx";
import { Outlet } from "react-router-dom";
import SideNav from "./components/shared/sideNav.tsx";

function App() {
  return (
    <main>
      <Header />
      <div className="p-6 gap-3">
        <SideNav />
        <Outlet />
      </div>
    </main>
  );
}

export default App;
