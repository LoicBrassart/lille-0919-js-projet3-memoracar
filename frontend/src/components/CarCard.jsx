import React, { useEffect, useState } from "react";
import "./style/CarCard.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function CarCard(props) {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/user/1/vehicle").then(({ data }) => {
      setUser(data[0]);
    });
  }, []);

  return (
    <div className="car">
      <img src="/pictures/ford.png" alt="ford"></img>
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
          <Link to="/">
            <button>Echeances</button>
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
