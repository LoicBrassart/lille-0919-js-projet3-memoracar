import React, { useState } from "react";
import "./style/LoginSignup.scss";
import IdentificationHeader from "../components/IdentificationHeader";

export default function Login() {
  const [email, setEmail] = useState("");
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
            onChange={() => setEmail()}
          ></input>
        </label>
        <label className="button">
          <input
            id="password"
            name="password"
            placeholder="mot de passe"
            type="password"
            value={password}
            onChange={() => setPassword()}
          ></input>
        </label>
        <input className="button" type="submit" value="Soummettre"></input>
      </form>
    </div>
  );
}
