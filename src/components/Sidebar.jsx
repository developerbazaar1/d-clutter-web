// src/components/Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      style={{ height: "100%", backgroundColor: "#34495e", paddingTop: "20px" }}
    >
      <nav>
        <ul style={{ listStyleType: "none", padding: "0" }}>
          <li>
            <Link
              to="/home"
              style={{
                color: "#ecf0f1",
                textDecoration: "none",
                padding: "10px",
                display: "block",
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/quotes"
              style={{
                color: "#ecf0f1",
                textDecoration: "none",
                padding: "10px",
                display: "block",
              }}
            >
              Quotes
            </Link>
          </li>
          <li>
            <Link
              to="/my-jobs"
              style={{
                color: "#ecf0f1",
                textDecoration: "none",
                padding: "10px",
                display: "block",
              }}
            >
              My Jobs
            </Link>
          </li>
          <li>
            <Link
              to="/messages"
              style={{
                color: "#ecf0f1",
                textDecoration: "none",
                padding: "10px",
                display: "block",
              }}
            >
              Messages
            </Link>
          </li>
          <li>
            <Link
              to="/profile"
              style={{
                color: "#ecf0f1",
                textDecoration: "none",
                padding: "10px",
                display: "block",
              }}
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              to="/settings"
              style={{
                color: "#ecf0f1",
                textDecoration: "none",
                padding: "10px",
                display: "block",
              }}
            >
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
