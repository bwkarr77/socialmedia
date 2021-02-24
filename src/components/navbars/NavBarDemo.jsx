import React from "react";
import { Link } from "react-router-dom";

import { AccountCircle, Search, Clear } from "@material-ui/icons";
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
        ></a>
        Logo
      </div>
      <div className="search-bar">
        <Search />
        <input className="search-input" value="Search" />
        <Clear />
      </div>
      <div className="nav-access">
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
