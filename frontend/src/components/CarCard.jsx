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
      setDate(data[0].date.slice(0, 10));
    });
  }, []);

  return (
    <div className="car">
      <img src="/pictures/ford.png" alt="ford"></img>
      <div className="info">
        <h2>Mis à jour le : {date}</h2>
        <h3>Kilométrage : {user.km} km</h3>
        <h1>
          {user.marque} | {user.modele}
        </h1>
        <h3>
          {user.motorisation} ({user.puissance} CH)
          {user.annee}
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
