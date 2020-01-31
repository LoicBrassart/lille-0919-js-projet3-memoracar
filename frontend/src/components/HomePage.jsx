//component to route in the App, with Carcard at the top and navbar in the bottom of the page

import CarCard from "./CarCard";
import React from "react";
import ListCar from "./ListCar";
import Historic from "./Historic";
import NavBar from "./NavBar";
import Intervention from "./Intervention";
import { Switch, Route } from "react-router-dom";
import Profil from "./Profil";

export default function HomePage() {
  return (
    <div>
      <CarCard />
      <Switch>
        <Route path="/historic" component={Historic}></Route>
        <Route exact path="/" component={ListCar}></Route>
        <Route path="/intervention/:family" component={Intervention}></Route>
      </Switch>
      <Profil />
      <NavBar />
    </div>
  );
}
