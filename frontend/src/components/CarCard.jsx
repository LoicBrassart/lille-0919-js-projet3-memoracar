import React, { useEffect } from "react";
import "./style/CarCard.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function CarCard(props) {
  const dispatch = useDispatch();
  const userVehicle = useSelector(state => state.user.carData);
  console.log(userVehicle);

  useEffect(() => {
    axios.get("http://localhost:5000/user/1/vehicle").then(({ data }) => {
      console.log("ok");
      dispatch({ type: "FETCHING_CAR_DATA", data: data[0] });

      // setUser(data[0]);
      // setDate(data[0].date.slice(0, 10));
    });
  }, [!userVehicle.currentMileage]);

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
          <Link to="/">
            <button>Echeances</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CarCard;
