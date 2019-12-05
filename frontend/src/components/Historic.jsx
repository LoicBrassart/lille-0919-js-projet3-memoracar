import React from "react";
import { connect } from "react-redux";
import "./style/Historic.scss";

function Historic(props) {
  return (
    <div className="HistoricBox">
      <div className="ToCome">
        {props.ToCome.map(item => {
          return (
            <div className="EventBox">
              <p>{item.title}</p>
              <p>done at {item.date}</p>
            </div>
          );
        })}
      </div>
      <div className="Present">date</div>
      <div className="Passed">
        {props.Passed.map(item => {
          return (
            <div className="EventBox">
              <p>{item.title}</p>
              <p>done at {item.date}</p>
            </div>
          );
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
