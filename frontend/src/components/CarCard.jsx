import React, { useEffect, useState } from "react";
import "./style/CarCard.scss";
import axios from "axios";
import { Link } from "react-router-dom";

export default function CarCard() {
  const [user, setUser] = useState([]);
  const [date, setDate] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/user/1/vehicle").then(({ data }) => {
      setUser(data[0]);
      setDate(data[0].date_mileage.slice(0, 10));
    });
  }, []);

  return (
    <div className="car">
      <img src="/pictures/ford.png" alt="ford"></img>
      <div className="info">
        <h2>Dernier scan le :{date}</h2>
        <h3>Kilométrage : {user.current_mileage} km</h3>
        <h1>
          {user.brand} | {user.model}
        </h1>
        <h3>
          {user.motorisation} ({user.horse_power} CH)
          {user.production_year}
        </h3>
        <div className="choix">
          <Link to="/historique">
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
