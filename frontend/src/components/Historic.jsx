import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import "./style/Historic.scss";
import HistoricCard from "./HistoricCard";

function Historic() {
  const [nextMaintenance, setnextMaintenance] = useState([]);
  const [passedMaintenance, setpassedMaintenance] = useState([]);
  const toCome = useSelector(state => state.ToCome);
  const Passed = useSelector(state => state.Passed);

  useEffect(() => {
    setnextMaintenance(
      toCome.sort((a, b) => {
        return a.trajetFaitPourcentage - b.trajetFaitPourcentage;
      })
    );
    setpassedMaintenance(
      Passed.sort((a, b) => {
        return b.km - a.km;
      })
    );
    setpassedMaintenance(Passed);
  }, [Passed, toCome]);

  return (
    <div className="HistoricBox">
      <h1>Historique</h1>

      <div
        className="ToCome"
        onLoad={e => {
          e.currentTarget.scrollTop = e.currentTarget.scrollHeight;
        }}
      >
        {nextMaintenance.map((item, i) => {
          return <HistoricCard item={item} key={i} />;
        })}
      </div>
      <div className="Present BoxEvent">{Date().slice(0, 15)}</div>
      <div className="Passed">
        {passedMaintenance.map((item, i) => {
          return <HistoricCard item={item} key={i} />;
        })}
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
