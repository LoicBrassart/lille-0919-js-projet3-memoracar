import React, { useEffect, useState } from "react";
import "./style/CarCard.scss";
import axios from "axios";
import { Link } from "react-router-dom";

export default function CarCard() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/user/3/vehicle").then(({ data }) => {
      setUser(data[0]);
    });
  }, []);

  return (
    <div className="car">
      <img src="/pictures/ford.png" alt="ford"></img>
      <div className="info">
        <h2>Dernier scan le :</h2>
        <h3>Kilométrage : {user.current_mileage} km</h3>
        <h1>
          {user.Marque} | {user.Modele}
        </h1>
        <h3>
          {user.Motorisation} ({user.Puissance} CH)
          {user.Annee}
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
