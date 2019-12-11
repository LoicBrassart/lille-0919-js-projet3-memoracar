import React from "react";
//import "./style/carCard.scss";

export default function CarCard() {
  return (
    <div className="car">
      <img src="/pictures/ford.png"></img>
      <div className="info">
        <h2>Dernier scan le : 05:12:2019</h2>
        <h3>Kilométrage : 30 000km</h3>
        <h1>Ford | Fiesta</h1>
        <h3>1.6 dCI (95 kW/130 ch) 2018</h3>
      </div>
    </div>
  );
}
