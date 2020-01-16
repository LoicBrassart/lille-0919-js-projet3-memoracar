import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style/SelectCar.scss";

export default function SelectCar() {
  const [immatriculation, setImmatriculation] = useState("");
  const [année, setAnnée] = useState("");
  const [vin, setVin] = useState("");
  const [kilometrage, setKilometrage] = useState("");
  const [modele, setModele] = useState({});
  const [modeles, initModeles] = useState([]);
  const year = new Date().getFullYear();

  useEffect(() => {
    axios
      .get("http://localhost:5000/modelevehicule/marque")
      .then(({ data }) => {
        initModeles(data);
        limitStringLength();
      });
  }, []);

  function addCar(e) {
    e.preventDefault();
    if (immatriculation === "") {
      alert(`immat prob`);
    } else if (vin.length !== 17) {
      console.log(`vin incomplet`);
    } else if (
      parseInt(kilometrage) >= Math.pow(10, 6) ||
      isNaN(kilometrage) ||
      kilometrage === ""
    ) {
      console.log("kilométrage incorrect");
    } else if (
      parseInt(année) < 1900 ||
      parseInt(année) > year ||
      année === "" ||
      isNaN(année)
    ) {
      console.log(`car crash`);
    } else {
      console.log(`car added`);
    }
  }

  function limitStringLength() {
    return (
      document.getElementById("année").maxLength,
      document.getElementById("kilometrage").maxLength,
      document.getElementById("VIN").maxLength
    );
  }
  return (
    <form
      onSubmit={e => {
        addCar(e);
      }}
    >
      <div id="selectCar">
        <header>
          <h1>Ajouter un véhicule</h1>
        </header>

        <div id="vehicleSelect">
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
          <select id="modele">
            <option value="">Modèle</option>
            <option>
              {modele.modele} {modele.motorisation} {modele.puissance}
            </option>
          </select>

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
            maxLength="17"
          ></input>

          <h2>Kilométrage</h2>
          <input
            id="kilometrage"
            name="kilometrage"
            type="text"
            value={kilometrage}
            placeholder="_ _ _ _ _ _"
            onChange={evt => setKilometrage(evt.target.value)}
            maxLength="7"
          ></input>

          <h2>Année</h2>
          <input
            id="année"
            name="année"
            type="text"
            value={année}
            placeholder="_ _ _ _"
            onChange={evt => setAnnée(evt.target.value)}
            maxLength="4"
          ></input>
        </div>
        <button className="button" type="submit">
          Valider
        </button>
      </div>
    </form>
  );
}
