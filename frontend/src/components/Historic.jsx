import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import "./style/Historic.scss";
import HistoricCard from "./HistoricCard";
import axios from "axios";
const { apiSite } = require("../conf");

function Historic() {
  const [nextMaintenance, setnextMaintenance] = useState([]);
  const [passedMaintenance, setpassedMaintenance] = useState([]);
  const [date, setDate] = useState("");
  const token = useSelector(state => state.user.token);
  useEffect(() => {
    axios
      .get(`${apiSite}/vehicule/1/nextmaintenance`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(({ data }) => {
        setnextMaintenance(data);
      });
    axios.get(`${apiSite}/vehicule/1/historique`).then(({ data }) => {
      setpassedMaintenance(data);
      setDate(data[0].date.slice(0, 10));
    });
  }, []);

  return (
    <div className="HistoricBox">
      <h1>Historique</h1>
      <div>
        <div className="ToCome">
          {nextMaintenance.map((item, i) => {
            return <HistoricCard item={item} key={i} />;
          })}
        </div>
        <div className="Present BoxEvent">{Date().slice(0, 15)}</div>
        <div className="Passed">
          {
            (date,
            passedMaintenance.map((item, i) => {
              return <HistoricCard item={item} key={i} />;
            }))
          }
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    Passed: state.Passed,
    ToCome: state.ToCome
  };
};

export default connect(mapStateToProps)(Historic);
