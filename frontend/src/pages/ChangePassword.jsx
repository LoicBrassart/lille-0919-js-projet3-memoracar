import React, { useState } from "react";
import "./style/ChangePassword.scss";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

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
    e.preventDefault();
    if (checkingPw()) {
      let userId = parseInt(user.id);
      axios
        .put(`${apiSite}/user/${userId}/changepw`, {
          prevPw: prevPw,
          newPw: newPw
        })
        .then(() => {
          history.push("/");
          toast.success("Votre mot de passe a bien été modifié !", {
            className: "customStyleToastContainer"
          });
        })
        .catch(() => {
          toast.error(
            "Une erreur est survenue lors de la modification du mot de passe. Veuillez réessayer.",
            {
              className: "customStyleToastContainer"
            }
          );
        });
    } else {
      return false;
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
            {newPw.length >= 8
              ? "Les mots de passe doivent être identiques"
              : "Les mots de passe doivent avoir plus de 8 caractères"}
          </p>
        </label>

        <input type="submit" className="button" value="Valider" />
        {/* <button type="button" onClick={history.push("/")}>
          Retour
        </button> */}
      </form>
    </div>
  );
}
