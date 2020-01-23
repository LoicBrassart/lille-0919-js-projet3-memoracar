import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import "./style/Historic.scss";
import HistoricCard from "./HistoricCard";

function Historic() {
  const [nextMaintenance, setnextMaintenance] = useState([]);
  const [passedMaintenance, setpassedMaintenance] = useState([]);
  const [date, setDate] = useState("");
  const toCome = useSelector(state => state.ToCome);
  const Passed = useSelector(state => state.Passed);

  useEffect(() => {
    setnextMaintenance(
      toCome.sort((a, b) => {
        return b.trajetFaitPourcentage - a.trajetFaitPourcentage;
      })
    );
    setpassedMaintenance(Passed);
    setDate(Passed[0].date.slice(0, 10));
  }, []);

  return (
    <div className="HistoricBox">
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
