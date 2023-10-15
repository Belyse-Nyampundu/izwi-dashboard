'use client'
import React, { ReactNode } from "react";
import Sidebar from "../Sidebar";
interface LayoutProps {
  children: ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={"flex"}>
      <div className="flex">
        <Sidebar/>
        <div>{children}</div>
      </div>
    </div>
  );
};
export default Layout;