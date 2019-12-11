import React, { useState } from "react";
import "./style/NavBar.scss";
import { Link } from "react-router-dom";

function NavBar() {
  const [modalKmOn, showModalKm] = useState(false);

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <img src="/pictures/icons/profile.png" alt="" />
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src="/pictures/icons/dashboard.png" alt="" />
          </Link>
        </li>
        <li id="kmUpdate">
          <button
            type="button"
            onClick={() => {
              showModalKm(true);
            }}
          >
            <img src="/pictures/icons/km_update.png" alt="" />
          </button>
        </li>
        <li>
          <Link to="/">
            <img src="/pictures/icons/tool.png" alt="" />
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src="/pictures/icons/sell.png" alt="" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
