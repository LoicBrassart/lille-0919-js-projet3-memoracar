import CarCard from "./CarCard";
import React from "react";
import ListCar from "./ListCar";
import Historic from "./Historic";
import NavBar from "./NavBar";
import Intervention from "./Intervention";
import { Switch, Route } from "react-router-dom";
import Profil from "./Profil";
import ContactUs from "../pages/ContactUs";

export default function HomePage() {
  return (
    <div>
      <Switch>
        <Route path="/contact" component={ContactUs}></Route>
        <CarCard />
        <Switch>
          <Route path="/historic" component={Historic}></Route>
          <Route exact path="/" component={ListCar}></Route>
          <Route path="/intervention/:family" component={Intervention}></Route>
        </Switch>
      </Switch>
      <Profil />
      <NavBar />
    </div>
  );
}
