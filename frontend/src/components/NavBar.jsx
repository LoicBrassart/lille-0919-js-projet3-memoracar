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
            <img src="/pictures/ico_perso.png" alt="" />
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src="/pictures/ico_perso.png" alt="" />
          </Link>
        </li>
        <li id="kmUpdate">
          <button
            type="button"
            onClick={() => {
              showModalKm(true);
            }}
          >
            KM
          </button>
        </li>
        <li>
          <Link to="/">
            <img src="/pictures/ico_perso.png" alt="" />
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src="/pictures/ico_perso.png" alt="" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
