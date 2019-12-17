import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./style/KmUpdate.scss";

//prettier-ignore
const keyboard = [1,2,3,4,5,6,7,8,9,"*",0,<img src="./pictures/icons/Supp.svg" />];

function KmUpdate(props) {
  console.log(typeof keyboard[11]);
  return (
    <div id="kmUpdate">
      <div id="carInfo">
        <h1>Renault | Laguna</h1>
        <h3>2.0 dCi (95kW/130 ch) 2004</h3>
      </div>
      <div id="counterKm">
        {props.kmToUpdate.map((num, i) => {
          return (
            <div key={i}>
              <p>{num}</p>
              <span>_</span>
            </div>
          );
        })}
      </div>
      <h4>Kilomètres</h4>

      <div id="keyboard">
        {keyboard.map((key, i) => {
          return (
            <button
              key={i}
              value={typeof key === "object" ? "erase" : key}
              onClick={e => {
                props.dispatch({
                  type: "UPDATE_KM_COUNTER",
                  value: e.currentTarget.value
                });
              }}
            >
              {key}
            </button>
          );
        })}
      </div>

      <button id="validation" type="button">
        Valider
      </button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    kmToUpdate: state.kmToUpdate
  };
};

export default connect(mapStateToProps)(KmUpdate);
