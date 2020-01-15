import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./style/KmUpdate.scss";
import ModalConfirmInfos from "./ModalConfirmInfos";
import { Link } from "react-router-dom";

//prettier-ignore
const keyboard = [1,2,3,4,5,6,7,8,9,"*",0,<img src="./pictures/icons/Supp.svg" alt=""/>];

function KmUpdate(props) {
  const dispatch = useDispatch();
  const currentMileage = useSelector(
    state => state.user.carData.currentMileage
  );
  const kmToUpdate = useSelector(state => state.kmToUpdate);
  const isMileageCorrect = useSelector(state => state.isMileageCorrect);

  useEffect(() => {
    return () => {
      dispatch({
        type: "CLEAN_STORE"
      });
    };
  }, [dispatch]);

  const checkingValidation = () => {
    const kmToUpdateJoined = parseInt(kmToUpdate.join(""));
    if (kmToUpdateJoined > currentMileage) {
      return true;
    }
  };

  return (
    <div id="kmUpdate">
      <div id="carInfo">
        <Link to="/">
          <img id="backArrow" src="/pictures/icons/back_arrow.png" alt="" />
        </Link>
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

      <div
        id="validation"
        type="button"
        onClick={() => {
          if (!checkingValidation()) {
            dispatch({
              type: "INCORRECT_MILEAGE"
            });
          }
        }}
      >
        {checkingValidation() ? (
          <ModalConfirmInfos
            value={`${kmToUpdate.join("")} km`}
            type="UPDATE_MILEAGE"
          />
        ) : (
          "valider"
        )}
      </div>
    </div>
  );
}

export default KmUpdate;
