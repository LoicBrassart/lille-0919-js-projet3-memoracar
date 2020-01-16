import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Identification from "./pages/Identification";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import HomePage from "./components/HomePage";
import KmUpdate from "./components/KmUpdate";
import AddCar from "./pages/AddCar";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./components/style/ToastStyle.scss";

const { siteTitle } = require("./conf.js");

export default function App() {
  document.title = siteTitle || "Shiny Hedgehog";
  return (
    <div className="App">
      <Switch>
        <Route path="/identification" component={Identification} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/addCar" component={AddCar} />
        <Route path="/kmupdate" component={KmUpdate}></Route>
        <Route path="/" component={HomePage} />
      </Switch>
      <ToastContainer
        position="bottom-right"
        autoClose={3500}
        hideProgressBar
        closeOnClick={false}
        draggable
        transition={Zoom}
      />
    </div>
  );
}
