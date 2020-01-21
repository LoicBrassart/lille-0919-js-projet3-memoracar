import React, { useState } from "react";
import "./style/LoginSignup.scss";
import IdentificationHeader from "../components/IdentificationHeader";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

const { apiSite } = require("../conf");

function Login() {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const sublogin = e => {
    e.preventDefault();
    axios
      .post(`${apiSite}/auth/login`, {
        mail: email,
        password
      })
      .then(({ data }) => {
        dispatch({ type: "FETCHING_USER_DATA", value: data });
        let userId = data.user.id;
        axios.get(`${apiSite}/user/${userId}/vehicle`).then(({ data }) => {
          dispatch({ type: "FETCHING_CAR_DATA", data: data[0] });
          history.push("/");
        });
      });
  };

  return (
    <div id="loginSignup">
      <IdentificationHeader />
      <form
        onSubmit={e => {
          sublogin(e);
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
        <input className="button" type="submit" value="Soummettre"></input>
      </form>
    </div>
  );
}

export default Login;
