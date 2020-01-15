import React from "react";
import { connect } from "react-redux";
import "./style/Historic.scss";
import HistoricCard from "./HistoricCard";

function Historic(props) {
  return (
    <div className="HistoricBox">
      <div id="historicContainer">
        <div className="ToCome">
          {props.ToCome.map((item, i) => {
            return <HistoricCard item={item} key={i} />;
          })}
        </div>
        <div className="Present BoxEvent">{Date()}</div>
        <div className="Passed">
          {props.Passed.map((item, i) => {
            return <HistoricCard item={item} key={i} />;
          })}
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
