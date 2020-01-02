import React, { useState } from "react";
import "./style/NavBar.scss";
import { Link } from "react-router-dom";

function NavBar() {
  const [modalKmOn, showModalKm] = useState(false);

  return (
    <nav>
      <ul>
        <li id="profile">
          <Link to="/">
            <img src="/pictures/icons/profile.png" alt="" />
          </Link>
        </li>
        <li id="dashboard">
          <Link to="/">
            <img src="/pictures/icons/dashboard.png" alt="" />
          </Link>
        </li>
        <li id="kmUpdate">
          <Link to="/kmupdate">
            <button>
              <img src="/pictures/icons/km_update.png" alt="" />
            </button>
          </Link>
        </li>
        <li id="tool">
          <Link to="/">
            <img src="/pictures/icons/tool.png" alt="" />
          </Link>
        </li>
        <li id="sell">
          <Link to="/">
            <img src="/pictures/icons/sell.png" alt="" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
