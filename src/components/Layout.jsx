// src/components/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import { AuthHeader } from "./AuthHeader";
import { NonAuthHeader } from "./NonAuthHeader";

const Layout = ({ isAuthenticated }) => {
  return (
    <div>
      {/* Conditional Header Rendering */}

      <div
        style={{
          position: "relative",
          height: "74px",
        }}
      >
        {isAuthenticated ? <AuthHeader /> : <NonAuthHeader />}
      </div>

      <main>
        {/* Render child routes */}
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
