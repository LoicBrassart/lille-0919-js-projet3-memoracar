//component slide from the bottom, open with the first button of the navBar. Leaving the possibility at the user to logout, to change his password, or contact admin.

import React from "react";
import { Link } from "react-router-dom";
import "./style/Profil.scss";
import Logout from "./Logout";
import { useSelector, useDispatch } from "react-redux";

export default function Profil() {
  const ProfilIsOpen = useSelector(state => state.ProfilIsOpen);
  const dispatch = useDispatch();

  return (
    <div
      id="profil"
      className={ProfilIsOpen ? "open" : "close"}
      onClick={() => {
        dispatch({
          type: "CLOSE_PROFIL"
        });
      }}
    >
      <div id="slide">
        <ul>
          <li
            onClick={() => {
              dispatch({
                type: "CLOSE_PROFIL"
              });
            }}
          >
            <Link to="/changepw">Changer mon mot de passe</Link>
          </li>
          <li
            onClick={() => {
              dispatch({
                type: "CLOSE_PROFIL"
              });
            }}
          >
            <Link to="/contact">Nous contacter</Link>
          </li>
          <li>
            <Logout />
          </li>
        </ul>
      </div>
    </div>
  );
}
