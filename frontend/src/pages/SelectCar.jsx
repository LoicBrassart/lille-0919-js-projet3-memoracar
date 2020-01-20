import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style/SelectCar.scss";

const { apiSite } = require("../conf");

export default function SelectCar(props) {
  const [immatriculation, setImmatriculation] = useState("");
  const [année, setAnnée] = useState("");
  const [vin, setVin] = useState("");
  const [kilometrage, setKilometrage] = useState("");
  const [modele, setModele] = useState({});
  const [modeles, initModeles] = useState([]);
  const year = new Date().getFullYear();

  useEffect(() => {
    axios.get(`${apiSite}/modelevehicule/modeles`).then(({ data }) => {
      initModeles(data);
      limitStringLength();
    });
  }, []);

  function addCar(e) {
    e.preventDefault();
    if (vin.length !== 17) {
      //insert toast
    } else if (parseInt(kilometrage) >= Math.pow(10, 6) || isNaN(kilometrage)) {
      //insert toast
    } else if (
      parseInt(année) < 1900 ||
      parseInt(année) > year ||
      isNaN(année)
    ) {
      //insert toast
    } else {
      //insert toast
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
          <h2>Marque</h2>
          <select
            name="marque"
            id="marque-select"
            onChange={e => {
              setModele(modeles[e.target.value]);
            }}
            required
          >
            <option value=""></option>
            {modeles.map((mod, i) => {
              return (
                <option key={i} value={i}>
                  {mod.marque}
                </option>
              );
            })}
          </select>

          <h2>Modèle</h2>
          <select id="modele" required>
            <option value=""></option>
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
            required
          ></input>

          <h2>VIN</h2>
          <input
            id="VIN"
            name="VIN"
            type="text"
            value={props.vin}
            placeholder="_ _ _ - _ _ _ _ _ _ - _ _ _ _ _ _ _ _"
            onChange={evt => setVin(evt.target.value)}
            maxLength="17"
            required
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
            required
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
            required
          ></input>
          <button className="button" type="submit">
            Valider
          </button>
        </div>
      </div>
    </form>
  );
}
