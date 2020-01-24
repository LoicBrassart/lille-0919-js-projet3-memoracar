import React from "react";
import "./style/CarCard.scss";
import { useSelector } from "react-redux";

function CarCard() {
  const userVehicle = useSelector(state => state.user.carData);

  return (
    <div className="car">
      <img
        className="logo"
        src={`/pictures/logos/${userVehicle.brand}.png`}
        alt={`${userVehicle.brand} logo`}
      ></img>
      <div className="info">
        <h2>Dernier scan le : {userVehicle.lastKmUpdate}</h2>
        <h3>Kilométrage : {userVehicle.currentMileage} km</h3>
        <h1>
          {userVehicle.brand} | {userVehicle.model}
        </h1>
        <h3>
          {`${userVehicle.enginePower} (${userVehicle.horsePower} CH) ${userVehicle.year}`}
        </h3>
      </div>
    </div>
  );
}

export default CarCard;
