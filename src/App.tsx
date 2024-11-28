import React from "react";
import Header from "./components/shared/header.tsx";
import { Outlet } from "react-router-dom";
import SideNav from "./components/shared/sideNav.tsx";

function App() {
  return (
    <main>
      <Header />
      <div className="p-6 gap-6 flex flex-row">
        <div className="relative w-[23%]">
          <SideNav />
        </div>
        <div className="w-[77%] bg-white p-6 rounded-md">
          <Outlet />
        </div>
      </div>
    </main>
  );
}

export default App;
