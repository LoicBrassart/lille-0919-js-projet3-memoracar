import React, { useState } from "react";
import "./style/LoginSignup.scss";
import IdentificationHeader from "../components/IdentificationHeader";

export default function Login() {
  const [email, setEmail] = useState("l@laurent.com");
  const [password, setPassword] = useState("");
  return (
    <div id="loginSignup">
      <IdentificationHeader />
      <form>
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
      <h2>{email}</h2>
    </div>
  );
}
