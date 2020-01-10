import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import "./style/KmUpdate.scss";

//prettier-ignore
const keyboard = [1,2,3,4,5,6,7,8,9,"*",0,<img src="./pictures/icons/Supp.svg" alt=""/>];

function KmUpdate(props) {
  let history = useHistory();

  const checkingValidation = () => {
    const kmToUpdate = parseInt(props.kmToUpdate.join(""));
    if (kmToUpdate > props.currentMileage) {
      return true;
    }
  };

  return (
    <div id="kmUpdate">
      <div id="carInfo">
        <h1>Renault | Laguna</h1>
        <h3>2.0 dCi (95kW/130 ch) 2004</h3>
      </div>

      <div id="counterKm">
        {props.kmToUpdate.map((num, i) => {
          return (
            <div
              key={i}
              className={props.isMileageCorrect ? null : "incorrect"}
            >
              <p>{num}</p>
              <span
                className={
                  typeof props.kmToUpdate[i] === "number" ? "inlineMode" : null
                }
              >
                _
              </span>
            </div>
          );
        })}
      </div>
      <p id="alertMsg" className={props.isMileageCorrect ? null : "shown"}>
        Le nouveau kilométrage doit être supérieur à l'ancien
      </p>
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

      <button
        id="validation"
        type="button"
        onClick={() => {
          if (checkingValidation()) {
            props.dispatch({
              type: "UPDATE_MILEAGE"
            });
            history.push("/");
          } else {
            props.dispatch({
              type: "INCORRECT_MILEAGE"
            });
          }
        }}
      >
        Valider
      </button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    kmToUpdate: state.kmToUpdate,
    currentMileage: state.currentMileage,
    isMileageCorrect: state.isMileageCorrect
  };
};

export default connect(mapStateToProps)(KmUpdate);
