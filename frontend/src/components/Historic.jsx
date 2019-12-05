import React from "react";
import { connect } from "react-redux";
import "./style/Historic.scss";

function Historic(props) {
  return (
    <div className="HistoricBox">
      <div className="scrollBar"></div>
      <div className="ToCome">
        {props.ToCome.map(item => {
          return (
            <div className="EventBox">
              <img src={item.icon} alt={item.title} />
              <div className="InfoBox">
                <p>{item.title}</p>
                <p>done at {item.date}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="Present">{Date()}</div>
      <div className="Passed">
        {props.Passed.map(item => {
          return (
            <div className="EventBox">
              <img src={item.icon} alt={item.title} />
              <div className="InfoBox">
                <p>{item.title}</p>
                <p>done at {item.date}</p>
              </div>
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
