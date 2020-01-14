import React from "react";
import "./style/NavBar.scss";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul>
        <li id="profile">
          <Link to="/">
            <img src="/pictures/icons/navbar/profile.png" alt="" />
          </Link>
        </li>
        <li id="dashboard">
          <Link to="/">
            <img src="/pictures/icons/navbar/dashboard.png" alt="" />
          </Link>
        </li>
        <li id="kmUpdate">
          <Link to="/kmupdate">
            <button>
              <img src="/pictures/icons/navbar/km_update.png" alt="" />
            </button>
          </Link>
        </li>
        <li id="tool">
          <Link to="/">
            <img src="/pictures/icons/navbar/tool.png" alt="" />
          </Link>
        </li>
        <li id="sell">
          <Link to="/">
            <img src="/pictures/icons/navbar/sell.png" alt="" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
