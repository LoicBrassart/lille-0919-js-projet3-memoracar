import React, { useEffect } from "react";
import "./style/CarCard.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Logout from "./Logout";

const { apiSite } = require("../conf");
function CarCard(props) {
  const dispatch = useDispatch();
  const userVehicle = useSelector(state => state.user.carData);

  useEffect(() => {
    axios.get(`${apiSite}/user/1/vehicle`).then(({ data }) => {
      dispatch({ type: "FETCHING_CAR_DATA", data: data[0] });
    });
  }, [dispatch]);

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
          {userVehicle.enginePower} ({userVehicle.horsePower} CH)
          {userVehicle.year}
        </h3>
        <div className="choice">
          <Link to="/historic">
            <button>Historique</button>
          </Link>
        </div>
      </div>
      <Logout />
    </div>
  );
}

export default CarCard;
