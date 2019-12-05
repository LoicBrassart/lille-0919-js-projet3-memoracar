import React, { Component } from "react";
import "./style/LoginSignup.scss";
import IdentificationHeader from "./IdentificationHeader";

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirmPassword: ""
    };
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeConfirmPassword = this.handleChangeConfirmPassword.bind(
      this
    );
  }
  handleChangeEmail(event) {
    if (event.target.value.includes("*")) {
      return;
    }
    this.setState({ email: event.target.value });
  }

  handleChangePassword(event) {
    if (event.target.value.includes("*")) {
      return;
    }
    this.setState({ password: event.target.value });
  }

  handleChangeConfirmPassword(event) {
    if (event.target.value.includes("*")) {
      return;
    }
    this.setState({ confirmPassword: event.target.value });
  }

  render() {
    return (
      <div id="loginSignup">
        <IdentificationHeader />
        <form>
          <label className="button">
            <input
              id="email"
              name="email"
              type="email"
              value={this.state.email}
              placeholder="email"
              onChange={this.handleChangeEmail}
            ></input>
          </label>
          <label className="button">
            <input
              id="password"
              name="password"
              placeholder="mot de passe"
              type="password"
              value={this.state.password}
              onChange={this.handleChangePassword}
            ></input>
          </label>
          <label className="button">
            <input
              id="confirmPassword"
              name="confirmPassword"
              placeholder="mot de passe"
              type="password"
              value={this.state.confirmPassword}
              onChange={this.handleChangeConfirmPassword}
            ></input>
          </label>
          <input className="button" type="submit" value="Soummettre"></input>
        </form>
      </div>
    );
  }
}
