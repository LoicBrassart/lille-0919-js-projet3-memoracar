import React, { useState } from "react";
import "./style/ContactUs.scss";
import NavBar from "../components/NavBar";
const { siteTitle } = require("../conf");

export default function Contact() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");

  return (
    <div id="contactUs">
      <h1>Nous contacter</h1>
      <form method="post" action={`mailto:contact@${siteTitle}.fr`}>
        <label className="button">
          <input
            id="email"
            name="email"
            placeholder="Entrer votre email"
            type="email"
            value={email}
            required
            onChange={evt => setEmail(evt.target.value)}
          />
        </label>
        <label className="button">
          <input
            id="subject"
            name="subject"
            placeholder="Subject"
            type="text"
            value={subject}
            required
            onChange={evt => setSubject(evt.target.value)}
          />
        </label>
        <label className="button">
          <textarea
            name="message"
            placeholder="Que pouvons nous faire pour vous ?"
            required
          ></textarea>
        </label>

        <input
          className="button submit"
          type="submit"
          value="Soumettre"
        ></input>
      </form>
      <NavBar />
    </div>
  );
}
