import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import ModalConfirmInfos from "./components/ModalConfirmInfos";
import ListCar from "./components/ListCar";
import Identification from "./pages/Identification";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import AddCar from "./pages/AddCar";

function App() {
  return (
    <div className="App">
      <ListCar />
      <Switch>
        <Route path="/identification" component={Identification} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/addCar" component={AddCar}
      </Switch>
      <HomePage />
      <NavBar />
      <ModalConfirmInfos />
    </div>
  );
}

export default App;
