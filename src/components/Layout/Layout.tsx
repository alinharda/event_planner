import React, { ReactNode } from 'react';
import "./Layout.scss";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="app-layout">
      {children}
    </div>
  );
};

export default Layout;