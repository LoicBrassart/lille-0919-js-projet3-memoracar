import React, { useState } from "react";
import "./style/ChangePassword.scss";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const { apiSite } = require("../conf");

export default function ChangePassword() {
  let history = useHistory();
  const [prevPw, setPrevPw] = useState("");
  const [newPw, setNewPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const [isMatched, setIsMatched] = useState(true);
  const user = useSelector(state => state.user);

  const checkingPw = () => {
    if (newPw === confirmPw && newPw.length >= 8) {
      return true;
    } else {
      setIsMatched(false);
      return false;
    }
  };

  const changePw = e => {
    if (checkingPw()) {
      e.preventDefault();
      let userId = user.id;
      axios
        .put(`${apiSite}/user/${userId}`, { password: newPw })
        .then(history.push("/"))
        .catch();
    }
  };

  return (
    <div id="changePassword">
      <h1>Changer votre mot de passe : </h1>
      <form
        onSubmit={e => {
          changePw(e);
        }}
      >
        <label className="button">
          <input
            type="password"
            name="prevPw"
            value={prevPw}
            placeholder="Précédent mot de passe"
            onChange={e => setPrevPw(e.target.value)}
            required
          />
        </label>
        <label className={!isMatched ? "button wrong" : "button"}>
          <input
            type="password"
            name="newPw"
            value={newPw}
            placeholder="Nouveau mot de passe"
            onChange={e => setNewPw(e.target.value)}
            onFocus={() => setIsMatched(true)}
            required
          />
          <p>8 caractères min.</p>
        </label>

        <label className={!isMatched ? "button wrong" : "button"}>
          <input
            type="password"
            name="confirmPw"
            value={confirmPw}
            placeholder="Nouveau mot de passe"
            onChange={e => setConfirmPw(e.target.value)}
            onFocus={() => setIsMatched(true)}
            required
          />
          <p className={!isMatched ? "alertMsg" : "hidden"}>
            Les mots de passe doivent être identiques
          </p>
        </label>

        <button type="button" className="button" onClick={() => checkingPw()}>
          Valider
        </button>
      </form>
    </div>
  );
}
