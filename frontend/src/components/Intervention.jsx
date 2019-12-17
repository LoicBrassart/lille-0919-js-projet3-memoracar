import React from "react";
import { connect } from "react-redux";
import "./style/Historic.scss";
import InterventionCard from "./InterventionCard";

function Intervention(props) {
  return (
    <div className="HistoricBox">
      <div className="module">
        <div id="imgIcone">
          <img src="/pictures/icons/blue_motor.png" id="motor" alt="/" />
          <h1>Moteur</h1>
          <p>
            Le kilométrage actuel du véhicule ainsi que l'historique enregistré
            indiquent que vos systèmes sont à jour.
          </p>
        </div>
      </div>
      <div>
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
