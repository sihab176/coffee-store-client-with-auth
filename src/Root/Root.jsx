import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div>
      <Header />
      <div className="max-w-7xl mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
