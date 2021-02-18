import React from "react";
import { Link } from "react-router-dom";

const NavBarLogged = ({ isLoggedIn }) => {
  return (
    <nav id="navbar">
      {/* <ul>
          <li>
            <Link to={"/"}>About</Link>
          </li>
          <li>
            <Link to={"/Work"}>Work</Link>
          </li>
          <li>
            <Link to={"/Contact"}>Contact</Link>
          </li>
        </ul> */}
      <div className="navbar">
        <div className="logo">Logo</div>
        <div className="categories">Categories</div>
        <div className="search">Search</div>
        <div className="nav-access">
          <div className="nav-access-1">
            <div className="button">Button</div>
          </div>
          <div className="nav-access-2">
            <div className="button">Button</div>
          </div>
        </div>
        <div className="user-settings">Settings</div>
      </div>
    </nav>
  );
};

export default NavBarLogged;
