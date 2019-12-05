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
          <Link to="/Login">
            <button>s'identifier</button>
          </Link>
        </li>
        <li>
          <Link to="/Signup">
            <button>s'inscrire</button>
          </Link>
        </li>
      </ul>
    </div>
  );
}
