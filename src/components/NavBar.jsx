import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ isLoggedIn }) => {
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

        <div className="search">Search</div>
      </div>
    </nav>
  );
};

export default NavBar;
