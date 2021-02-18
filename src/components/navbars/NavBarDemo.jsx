import React from "react";
import { Link } from "react-router-dom";

import "./navbar.scss";

const NavBarDemo = ({ isLoggedIn }) => {
  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <div className="search">Search</div>
      <div className="nav-access">
        <div className="login-button">Login</div>
        <div className="signup-button">Sign-Up</div>
      </div>
      <div className="user-settings">Settings</div>
    </nav>
  );
};

export default NavBarDemo;
