import React, { useEffect, useState } from "react";
import "./style/CarCard.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const { apiSite } = require("../conf");
function CarCard(props) {
  const [user, setUser] = useState([]);
  const [date, setDate] = useState("");

  useEffect(() => {
    axios.get(`${apiSite}/user/1/vehicle`).then(({ data }) => {
      setUser(data[0]);
      setDate(data[0].date.slice(0, 10));
    });
  }, []);

  return (
    <div className="car">
      <img
        className="logo"
        src={`/pictures/logos/${user.marque}.png`}
        alt="renault"
      ></img>
      <div className="info">
        <h2>Dernier scan le :{date}</h2>
        <h3>Kilométrage : {props.currentMileage} km</h3>
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
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    currentMileage: state.currentMileage
  };
};

export default connect(mapStateToProps)(CarCard);
