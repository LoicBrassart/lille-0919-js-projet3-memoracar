//component to show the logo on the upper half of the app(login, signup,indentification are under)

import React from "react";
import { Link } from "react-router-dom";
import "./style/IdentificationHeader.scss";

const { img } = require("../conf");
export default function IdentificationHeader() {
  return (
    <header>
      <Link to="/identification">
        <img src={`${img}`} alt="logo_marque" />
      </Link>
    </header>
  );
}
