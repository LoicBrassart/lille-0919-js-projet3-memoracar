import React from "react";
import { connect } from "react-redux";
import "./style/Historic.scss";
import HistoricCard from "./HistoricCard";

function Historic(props) {
  return (
    <div className="HistoricBox">
      <div>
        <div className="ToCome">
          {props.ToCome.map(item => {
            return <HistoricCard item={item} key={item} />;
          })}
        </div>
        <div className="Present BoxEvent">{Date()}</div>
        <div className="Passed">
          {props.ToCome.map(item => {
            return <HistoricCard item={item} key={item} />;
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
