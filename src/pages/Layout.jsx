import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../componats/NavBar";
import SideBar from "../componats/SideBar";

export default function Layout() {
  return (
    <>
      <div className="container-fluid">
        <NavBar />
        <div className="row">
          <div className="col-2 sideBar bg-light">
            <SideBar />
          </div>
          <div className="col-10">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
