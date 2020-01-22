import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./style/ListCar.scss";
import { Link } from "react-router-dom";
import axios from "axios";
const { apiSite } = require("../conf");

function ListCar() {
  const [nextMaintenance, setnextMaintenance] = useState([]);
  const token = useSelector(state => state.user.token);
  useEffect(() => {
    axios
      .get(`${apiSite}/vehicule/1/nextmaintenance`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(({ data }) => {
        const lvls = calcLevels(data);
        const filtered = filterFamilies(lvls);
        setnextMaintenance(filtered);
      });
  }, [setnextMaintenance]);

  function calcLevels(oldPlan) {
    if (oldPlan)
      return oldPlan.map((elt, i) => {
        let color = "blue";
        if (elt.prochaineEcheancePourcentage >= 1) color = "red";
        else if (elt.prochaineEcheancePourcentage >= 0.9) color = "orange";
        return { ...elt, niveau: color };
      });
  }

  function filterFamilies(oldPlan) {
    let families = [];
    let plan = oldPlan.sort((a, b) => {
      return b.prochaineEcheancePourcentage - a.prochaineEcheancePourcentage;
    });
    return plan.filter(item => {
      if (families.includes(item.famille)) {
        return false;
      }
      families.push(item.famille);
      return true;
    });
  }

  return (
    <div className="intFamilies">
      <div className="icones">
        {nextMaintenance.map((elt, i) => {
          return (
            <div key={i} className="module">
              <div id="imgIcone">
                <Link to={`intervention/${elt.famille}`}>
                  <img
                    src={`/pictures/icons/famille/${elt.niveau}_${elt.famille}.png`}
                    alt={elt.famille}
                  />
                  <h1>{elt.famille}</h1>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default ListCar;
