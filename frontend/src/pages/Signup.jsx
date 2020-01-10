import React, { useState } from "react";
import "./style/LoginSignup.scss";
import axios from "axios";
import IdentificationHeader from "../components/IdentificationHeader";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

function Signup(props) {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function signup(e) {
    e.preventDefault();
    axios
      .post("http://localhost:5000/auth/signup", {
        mail: email,
        password
      })
      .then(({ data }) => {
        history.push("/AddCar");
        props.dispatch({ type: "FETCHING_USER_DATA", value: { data } });
      })
      .catch(() => {});
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
        </label>
        <input className="button" type="submit" value="Soummettre"></input>
      </form>
    </div>
  );
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps)(Signup);
