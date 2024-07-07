import React from "react";
import { Header } from "../constants/Imports.tsx";

interface ChildrenProps {
  children: React.ReactNode;
}

const Layout: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <div className="relative z-99">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
