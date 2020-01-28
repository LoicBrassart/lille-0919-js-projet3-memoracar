//components creating a form for user signup

import React, { useState } from "react";
import "./style/LoginSignup.scss";
import axios from "axios";
import IdentificationHeader from "../components/IdentificationHeader";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
const { apiSite } = require("../conf");

function Signup(props) {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // function to check if the user enter a confirm password:
  // min length : 8 and
  // repeat in input password and input password
  const check = () => {
    if (password === confirmPassword && password.length >= 8) {
      return true;
    } else {
      return false;
    }
  };

  // function adding the new User and his password in BDD, in redux, and redirect the user to add a car
  function signup(e) {
    if (check()) {
      e.preventDefault();
      axios
        .post(`${apiSite}/auth/signup`, {
          mail: email,
          password
        })
        .then(({ data }) => {
          history.push("/selectcar");
          props.dispatch({ type: "CREATE_USER_DATA", value: data });
        });
    }
  }

  return (
    <div id="loginSignup">
      <IdentificationHeader />
      <form
        onSubmit={e => {
          signup(e);
        }}
      >
        <label className="button">
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            placeholder="email"
            onChange={evt => setEmail(evt.target.value)}
          ></input>
        </label>
        <label className="button">
          <input
            id="password"
            name="password"
            placeholder="mot de passe"
            type="password"
            value={password}
            onChange={evt => setPassword(evt.target.value)}
          ></input>
          <p className={check() ? "wrong" : "valid"}>
            {password.length < 8 ? "8 caractères minimum" : ""}
          </p>
        </label>
        <label className="button">
          <input
            id="confirmPassword"
            name="confirmPassword"
            placeholder="mot de passe"
            type="password"
            value={confirmPassword}
            onChange={evt => setConfirmPassword(evt.target.value)}
          ></input>
          <p className={check() ? "wrong" : "valid"}>
            {check() ? "" : "les 2 mots de passe doivent être identiques."}
          </p>
        </label>
        <input className="button" type="submit" value="Soumettre"></input>
      </form>
    </div>
  );
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps)(Signup);
