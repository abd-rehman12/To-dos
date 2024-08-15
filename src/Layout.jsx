import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header/Header";
import { Home } from "./Components/Todos/Home";

function Layout() {
  return (
    <>
    
      <Header />
      <Home>
      <Outlet />
      </Home>
    </>
  );
}

export default Layout;
