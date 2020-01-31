//component used like HomePage, showing the different car part family

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./style/ListCar.scss";
import { Link } from "react-router-dom";
import axios from "axios";

const { apiSite } = require("../conf");

function ListCar() {
  const [nextMaintenance, setnextMaintenance] = useState([]);
  const user = useSelector(state => state.user);
  const toCome = useSelector(state => state.ToCome);
  const dispatch = useDispatch();
  const token = useSelector(state => state.user.token);

  useEffect(() => {
    axios
      .get(`${apiSite}/vehicule/${user.carData.id}/nextmaintenance`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(({ data }) => {
        dispatch({ type: "DATA_FUTURE_MAINTENANCE", data: data });
      });
    axios
      .get(`${apiSite}/vehicule/${user.carData.id}/historique`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(({ data }) => {
        dispatch({ type: "DATA_PASSED_MAINTENANCE", data: data });
      });
  }, [user.carData.currentMileage, dispatch, token, user.carData.id]);

  useEffect(() => {
    const lvls = calcLevels(toCome);
    const filtered = filterFamilies(lvls);
    setnextMaintenance(filtered);
  }, [toCome]);

  //function to calculate and attribute the color of the emergency to intervene
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

  //function to sort all the family recovered by emergency and don't keep duplicates
  function filterFamilies(oldPlan) {
    let families = [];
    let plan = oldPlan.sort((a, b) => {
      return b.trajetFaitPourcentage - a.trajetFaitPourcentage;
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
      <div className="choice">
        <Link to="/historic">
          <button>Historique</button>
        </Link>
      </div>
      <div className="icones">
        {nextMaintenance.map((elt, i) => {
          return (
            <div key={i} className="module">
              <div className="imgIcone">
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
