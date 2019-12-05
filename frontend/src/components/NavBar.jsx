import React from "react";
import "./style/NavBar.scss";

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <img src="/pictures/ico_perso.png" alt="" />
        </li>
        <li>
          <img src="/pictures/ico_perso.png" alt="" />
        </li>
        <li id="kmUpdate">
          <button>KM</button>
        </li>
        <li>
          <img src="/pictures/ico_perso.png" alt="" />
        </li>
        <li>
          <img src="/pictures/ico_perso.png" alt="" />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
