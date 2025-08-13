import React from "react";
import dclutterlogo from "../assets/svg/dclutterlogo.svg";

export const NonAuthHeader = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-white bg-white"
      style={{
        width: "100vw",
        position: "fixed",
        zIndex: "1000",
      }}
    >
      <div className="d-flex align-items-center justify-content-between w-100 px-5">
        <img src={dclutterlogo} alt="D Clutter Logo" />
        <div className="d-flex gap-5">
          <div className="text-14-600">Home</div>
          <div className="text-14-600">About Us</div>
          <div className="text-14-600">Contact Us</div>
        </div>
        <div
          className="text-16-400 border-grey px-3 py-1"
          style={{
            cursor: "pointer",
            color: "#15BBC1",
            borderRadius: "5px",
          }}
        >
          Login
        </div>
      </div>
    </nav>
  );
};
