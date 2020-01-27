//Component leaving the user choice between signup or login

import React from "react";
import { Link } from "react-router-dom";
import "./style/Identification.scss";
import IdentificationHeader from "../components/IdentificationHeader";

export default function Identification() {
  return (
    <div id="identification">
      <IdentificationHeader />
      <ul className="identification">
        <li>
          <Link to="/login">
            <button>S'identifier</button>
          </Link>
        </li>
        <li>
          <Link to="/signup">
            <button>S'inscrire</button>
          </Link>
        </li>
      </ul>
    </div>
  );
}
