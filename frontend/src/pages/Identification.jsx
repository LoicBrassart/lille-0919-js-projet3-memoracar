import React from "react";
import { Link } from "react-router-dom";
import "./style/Identification.scss";

export default function Identification() {
  return (
    <div id="identification">
      <header>
        <img
          src="/pictures/logos/Logo_MemoraCar_Def-03.png"
          alt="logo_Memoracar"
        />
      </header>
      <ul className="identification">
        <li>
          <Link to="/Login">
            <button>s'identifier</button>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <button>s'inscrire</button>
          </Link>
        </li>
      </ul>
    </div>
  );
}
