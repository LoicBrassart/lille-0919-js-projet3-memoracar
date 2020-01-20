import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./style/Intervention.scss";
import InterventionCard from "./InterventionCard";
import { useParams } from "react-router-dom";
import axios from "axios";
const { apiSite } = require("../conf");

function Intervention(props) {
  const [nextMaintenance, setnextMaintenance] = useState([]);
  const [passedMaintenance, setpassedMaintenance] = useState([]);

  useEffect(() => {
    axios.get(`${apiSite}/vehicule/1/nextmaintenance`).then(({ data }) => {
      const lvls = calcLevels(data);

      setnextMaintenance(
        lvls
          .filter(vehicule => {
            return (
              (vehicule.famille === family) &
                (vehicule.trajetFaitPourcentage >= 0.9) ||
              vehicule.trajetFaitPourcentage < 0
            );
          })
          .sort((a, b) => {
            return b.trajetFaitPourcentage - a.trajetFaitPourcentage;
          })
      );
    });

    axios.get(`${apiSite}/vehicule/1/historique`).then(({ data }) => {
      setpassedMaintenance(
        data.filter(vehicule => {
          return vehicule.famille === family;
        })
      );
    });
  }, []);
  const { family } = useParams();

  function calcLevels(oldPlan) {
    if (oldPlan)
      return oldPlan.map((elt, i) => {
        let color = "blue";
        if (elt.trajetFaitPourcentage >= 1 || elt.trajetFaitPourcentage < 0)
          color = "red";
        else if (elt.trajetFaitPourcentage >= 0.9) color = "orange";
        return { ...elt, niveau: color };
      });
  }

  return (
    <div className="InterventionBox">
      <div className="family">
        <img
          src={`/pictures/icons/${family}/${
            nextMaintenance[0] ? nextMaintenance[0].niveau : "blue"
          }_${family}.png`}
          id="motor"
          alt="/"
        />
        <h1>{family}</h1>
        <p>
          Le kilométrage actuel du véhicule ainsi que l'historique enregistré
          indiquent que vos systèmes sont à jour.
        </p>
      </div>
      <div className="notification">
        <div className="ToCome">
          {nextMaintenance.map((item, i) => {
            return <InterventionCard item={item} key={i} />;
          })}
        </div>
        <div className="Present BoxEvent">{Date().slice(0, 15)}</div>
        <div className="Passed">
          {passedMaintenance.map((item, i) => {
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
