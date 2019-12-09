import React, { useState } from "react";
import "./style/AddCar.scss";

export default function AddCarr() {
  const [registration, setRegistration] = useState("");
  const [vin, setVin] = useState("");
  return (
    <div id="addCar">
      <header>
        <button className="close">X</button>
        <p class="h1">IDENTIFICATION</p>
      </header>
      <div id="vehicleRegistration">
        <p className="h2">IMMATRICULATION</p>
        <input
          id="registration"
          name="registration"
          type="text"
          value={registration}
          placeholder="IMMATRICULATION"
          onChange={evt => setRegistration(evt.target.value)}
        ></input>
        <select name="country" id="coutry-select">
          <option value="F">France</option>
          <option value="B">Belgique</option>
          <option value="D">Deutschland</option>{" "}
          <option value="GB">Great Britain</option>
          <option value="S">Spain</option>
        </select>
      </div>
      <div id="vinRegistration">
        <p className="h2">V.I.N</p>
        <input
          id="vin"
          name="vin"
          type="text"
          value={vin}
          placeholder="N° : _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ "
          onChange={evt => setVin(evt.target.value)}
        ></input>
      </div>
      <button className="button">Valider</button>
    </div>
  );
}
