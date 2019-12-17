import React from "react";
import { connect } from "react-redux";
import "./style/Intervention.scss";
import InterventionCard from "./InterventionCard";
import { useParams } from "react-router-dom";

function Intervention(props) {
  const { family } = useParams();
  return (
    <div className="InterventionBox">
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
          {props.Motor.Futur.map((item, i) => {
            return <InterventionCard item={item} key={i} />;
          })}
        </div>
        <div className="Present BoxEvent">{Date()}</div>
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
