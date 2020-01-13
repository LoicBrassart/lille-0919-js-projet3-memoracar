import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AddCarr() {
  const [immatriculation, setImmatriculation] = useState("");
  const [année, setAnnée] = useState("");
  const [modele, setModele] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/1").then(({ data }) => {
      setModele(data[0]);
    });
  }, []);

  return (
    <div id="addCar">
      <header>
        <button className="close">X</button>
        <h1>Ajouter un véhicule</h1>
      </header>

      <div id="vehicleRegistration">
        <select name="marque" id="marque-select">
          <option value="">Marque</option>
          <option value="">Renault</option>
          <option value="">Ford</option>
          <option value="">Toyota</option>
        </select>
        <h2>Modèle</h2>
        <div>{modele.modele}</div>

        <div id="immatriculation">
          <h2>Immatriculation</h2>
          <input
            id="immatriculation"
            name="immatriculation"
            type="text"
            value={immatriculation}
            placeholder="_ _ - _ _ _ - _ _"
            onChange={evt => setImmatriculation(evt.target.value)}
          ></input>
        </div>
        <h2>Année</h2>
        <input
          id="année"
          name="année"
          type="number"
          value={année}
          placeholder="_ _ _ _"
          onChange={evt => setAnnée(evt.target.value)}
        ></input>
      </div>
      <button className="button">Valider</button>
    </div>
  );
}
