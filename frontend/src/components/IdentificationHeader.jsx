import React from "react";
import { Link } from "react-router-dom";
import "./style/IdentificationHeader.scss";

export default function IdentificationHeader() {
  return (
    <header>
      <Link to="/identification">
        <img src="/pictures/logos/shinyHedgehog.jpg" alt="logo_shinyHedgehog" />
      </Link>
    </header>
  );
}
