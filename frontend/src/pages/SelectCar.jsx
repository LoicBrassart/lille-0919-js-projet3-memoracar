import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style/SelectCar.scss";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const { apiSite } = require("../conf");

export default function SelectCar() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [immatriculation, setImmatriculation] = useState("");
  const [annee, setAnnee] = useState("");
  const [vin, setVin] = useState("");
  const [kilometrage, setKilometrage] = useState("");
  const [modele, setModele] = useState({});
  const [modeles, initModeles] = useState([]);
  const idUser = useSelector(state => state.user.id);
  const token = useSelector(state => state.user.token);
  const year = new Date().getFullYear();
  let date = new Date();
  let Month = "";
  if (date.getMonth() + 1 < 10) {
    Month = "0" + parseInt(date.getMonth() + 1);
  }

  const today = `${date.getFullYear()}-${Month}-${date.getDate()}`;

  useEffect(() => {
    axios
      .get(`${apiSite}/modelevehicule/modeles`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(({ data }) => {
        initModeles(data);
      });
  }, [token]);

  function addCar(e) {
    e.preventDefault();
    if (
      vin.length === 17 &&
      parseInt(kilometrage) <= Math.pow(10, 6) &&
      parseInt(annee) > 1900 &&
      parseInt(annee) < year
    ) {
      axios
        .post(`${apiSite}/modelevehicule/${idUser}/newcar`, {
          id_modele_voiture: modele.id,
          vin: vin,
          plaque: immatriculation,
          km: parseInt(kilometrage),
          annee: annee,
          date: today
        })
        .then(({ data }) => {
          history.push("/");

          dispatch({
            type: "CREATE_CAR",
            value: {
              km: parseInt(kilometrage),
              annee: annee,
              date: today,
              marque: modele.marque,
              modele: modele.modele,
              motorisation: modele.motorisation,
              puissance: modele.puissance,
              id_exemplaire_voiture: parseInt(data)
            }
          });
        });
    }
    if (vin.length !== 17) {
      toast.error("votre vin doit contenir 17 caractères ! ");
    } else if (parseInt(kilometrage) >= Math.pow(10, 6) || isNaN(kilometrage)) {
      toast.error("votre kilométrage doit être entre 0 et 1 000 000 ! ");
    } else if (
      parseInt(annee) < 1900 ||
      parseInt(annee) > year ||
      isNaN(annee)
    ) {
      toast.error(`l'année doit être comprise entre 1900 et ${year} !`);
    }
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
            value={vin}
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
            value={annee}
            placeholder="_ _ _ _"
            onChange={evt => setAnnee(evt.target.value)}
            maxLength="4"
            required
          ></input>
          <button
            className="button"
            type="submit"
            onClick={() => {
              dispatch({ type: "DATE_NEW_CAR", value: today });
            }}
          >
            Valider
          </button>
        </div>
      </div>
    </form>
  );
}
