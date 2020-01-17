import React from "react";
import { Link } from "react-router-dom";
import "./style/Profil.scss";
import Logout from "./Logout";
import { useSelector, useDispatch } from "react-redux";

export default function Profil() {
  const ProfilIsOpen = useSelector(state => state.ProfilIsOpen);
  const dispatch = useDispatch();

  return (
    <div id="profil">
      <ul className={ProfilIsOpen ? "open" : "close"}>
        <li
          onClick={() => {
            dispatch({
              type: "CLOSE_PROFIL"
            });
          }}
        >
          <Link to="/changePassword">Changer mon mot de passe</Link>
        </li>
        <li
          onClick={() => {
            dispatch({
              type: "CLOSE_PROFIL"
            });
          }}
        >
          <Link to="/contact">Contacter le SAV</Link>
        </li>
        <li>
          <Logout />
        </li>
      </ul>
    </div>
  );
}
