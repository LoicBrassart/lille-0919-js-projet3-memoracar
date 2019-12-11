import React from "react";
import { Link } from "react-router-dom";
import "./style/IdentificationHeader.scss";

export default function IdentificationHeader() {
  return (
    <header>
      <Link to="/identification">
        <img
          src="/pictures/logos/Logo_MemoraCar_Def-03.png"
          alt="logo_Memoracar"
        />
      </Link>
    </header>
  );
}
