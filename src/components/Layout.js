import React from "react";
import Sidebar from "./SideBar";

const Layout = ({ children }) => {
  return (
    <div className="h-screen flex flex-row justify-start">
      <Sidebar />
      <div className="min-h-screen flex items-center pt-10  bg-secondary w-full">
        {children}
      </div>
    </div>
  );
};

export default Layout;
