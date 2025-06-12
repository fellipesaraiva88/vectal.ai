// components/Layout.tsx
import React from "react";
import "./globals.css";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-black text-white">
      {children}
    </div>
  );
};

export default Layout;
