import React, { useEffect, useState } from "react";
import axios from "axios";

export default function SelectCar() {
  const [immatriculation, setImmatriculation] = useState("");
  const [année, setAnnée] = useState("");
  const [vin, setVin] = useState("");
  const [modele, setModele] = useState({});
  const [modeles, initModeles] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/modelevehicule/marque")
      .then(({ data }) => {
        console.log(data);
        initModeles(data);
      });
  }, []);

  return (
    <div id="addCar">
      <header>
        <form>
          <input type="button" onclick="twFermer()" value="X"></input>
        </form>
        <h1>Ajouter un véhicule</h1>
      </header>

      <div id="vehicleRegistration">
        <select
          name="marque"
          id="marque-select"
          onChange={e => {
            setModele(modeles[e.target.value]);
          }}
        >
          <option value="">Marque</option>
          {modeles.map((mod, i) => {
            return (
              <option key={i} value={i}>
                {mod.marque}
              </option>
            );
          })}
        </select>

        <h2>Modèle</h2>
        <div id="modele">
          {modele.modele} {modele.motorisation} {modele.puissance}
        </div>

        <h2>Immatriculation</h2>
        <input
          id="immatriculation"
          name="immatriculation"
          type="text"
          value={immatriculation}
          placeholder="_ _ - _ _ _ - _ _"
          onChange={evt => setImmatriculation(evt.target.value)}
        ></input>

        <h2>VIN</h2>
        <input
          id="VIN"
          name="VIN"
          type="text"
          value={vin}
          placeholder="_ _ _ - _ _ _ _ _ _ - _ _ _ _ _ _ _ _"
          onChange={evt => setVin(evt.target.value)}
        ></input>

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
