import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./style/Intervention.scss";
import InterventionCard from "./InterventionCard";
import { useParams } from "react-router-dom";
import axios from "axios";

function Intervention(props) {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/vehicule/1/nextmaintenance")
      .then(({ data }) => {
        setUser(
          data.filter(vehicule => {
            return vehicule.famille === family;
          })
        );
      });
  }, []);
  const { family } = useParams();

  return (
    <div className="InterventionBox">
      {/* <h1>{user[0] && user[0].prochaineEcheance}</h1> */}
      <div className="family">
        <img src={`/pictures/icons/blue_${family}.png`} id="motor" alt="/" />
        <h1>{family}</h1>
        <p>
          Le kilométrage actuel du véhicule ainsi que l'historique enregistré
          indiquent que vos systèmes sont à jour.
        </p>
      </div>
      <div className="notification">
        <div className="ToCome">
          {user.map((item, i) => {
            return <InterventionCard item={item} key={i} />;
          })}
        </div>
        <div className="Present BoxEvent">{Date().slice(0, 15)}</div>
        <div className="Passed">
          {props.Motor.Passed.map((item, i) => {
            return <InterventionCard item={item} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    Motor: state.Motor
  };
};

export default connect(mapStateToProps)(Intervention);
