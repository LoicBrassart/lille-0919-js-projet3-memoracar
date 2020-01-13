import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./style/KmUpdate.scss";

//prettier-ignore
const keyboard = [1,2,3,4,5,6,7,8,9,"*",0,<img src="./pictures/icons/Supp.svg" alt=""/>];

function KmUpdate(props) {
  const dispatch = useDispatch();
  const currentMileage = useSelector(state => state.currentMileage);
  const kmToUpdate = useSelector(state => state.kmToUpdate);
  const isMileageCorrect = useSelector(state => state.isMileageCorrect);
  const history = useHistory();

  const checkingValidation = () => {
    const kmToUpdateJoined = parseInt(kmToUpdate.join(""));
    if (kmToUpdateJoined > currentMileage) {
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
        {kmToUpdate.map((num, i) => {
          return (
            <div key={i} className={isMileageCorrect ? null : "incorrect"}>
              <p>{num}</p>
              <span
                className={
                  typeof kmToUpdate[i] === "number" ? "inlineMode" : null
                }
              >
                _
              </span>
            </div>
          );
        })}
      </div>
      <p id="alertMsg" className={isMileageCorrect ? null : "shown"}>
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
                dispatch({
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
            dispatch({
              type: "UPDATE_MILEAGE"
            });
            history.push("/");
          } else {
            dispatch({
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

export default KmUpdate;
