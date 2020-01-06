import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Identification from "./pages/Identification";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import HomePage from "./components/HomePage";
import KmUpdate from "./components/KmUpdate";
import AddCar from "./pages/AddCar";

export default function App() {
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
    </div>
  );
}
