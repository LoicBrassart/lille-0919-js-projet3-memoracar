import CarCard from "./CarCard";
import React from "react";
import ListCar from "./ListCar";
import Historic from "./Historic";
import NavBar from "./NavBar";
import { Switch, Route } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <CarCard />
      <Switch>
        <Route path="/historique" component={Historic}></Route>
        <Route path="/" component={ListCar}></Route>
      </Switch>
      <NavBar />
    </div>
  );
}
