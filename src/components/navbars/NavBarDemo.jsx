import React from "react";
import { Link } from "react-router-dom";

import {
  AccountCircle,
  Search,
  Clear,
  Chat,
  Mail,
  Create,
  Videocam,
  Equalizer,
  TrendingUp,
} from "@material-ui/icons";
import { Button } from "@material-ui/core";

import "./navbar.scss";

const NavBarDemo = ({ isLoggedIn }) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <a
          className="fa fa-reddit"
          target="_blank"
          rel="noopener noreferrer"
          href=""
          aria-hidden="true"
        >
          <span>Logo</span>
        </a>
      </div>
      <div className="category"></div>
      <div className="search-bar">
        <Search className="search-icon" />
        <input className="search-input" value="Search" />
        <Clear className="search-clear" />
      </div>
      <div className="nav-access">
        <div className="left-section">
          {/*??, equalizer,  */}
          <TrendingUp className="left-buttons" />
          <Equalizer className="left-buttons" />
          <Videocam className="left-buttons" />
        </div>
        <div className="right-section">
          <Chat className="right-buttons" />
          <Mail className="right-buttons" />
          <Create className="right-buttons" />
        </div>
        <div className="login-button">
          <Button variant="contained" border-radius="50%" className="logIn">
            Log In
          </Button>
        </div>
        <div className="signup-button">
          <Button variant="contained" color="primary" className="signIn">
            Sign Up
          </Button>
        </div>
        <div className="user-settings">
          <AccountCircle />
          Settings
        </div>
      </div>
    </nav>
  );
};

export default NavBarDemo;
