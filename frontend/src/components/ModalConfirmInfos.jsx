import React, { useState } from "react";
import ReactModal from "react-modal";
import "./style/ModalConfirmInfos.scss";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
const { apiSite } = require("../conf");

export default function ModalConfirmInfos(props) {
  const [showModal, setShowModal] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const kmToUpdate = useSelector(state => state.kmToUpdate);
  const idVehicle = useSelector(state => state.user.carData.id);
  const token = useSelector(state => state.user.token);

  let date = new Date();
  let Month = "";
  if (date.getMonth() + 1 < 10) {
    Month = "0" + parseInt(date.getMonth() + 1);
  }
  const today = `${date.getDate()}-${Month}-${date.getFullYear()}`;
  const todayEng = `${date.getFullYear()}-${Month}-${date.getDate()}`;

  const sendingUpdate = (id, km, date) => {
    axios
      .put(
        `${apiSite}/vehicule/${id}`,
        { km: km, date: date },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      )
      .then(() => {
        toast.success("Votre kilométrage a bien été mis à jour !", {
          className: "customStyleToastContainer"
        });
      })
      .catch(() => {
        toast.error(
          "Une erreur s'est produite lors de la mise à jour de votre kilométrage, veuillez réessayer",
          {
            className: "customStyleToastContainer"
          }
        );
      });
  };

  ReactModal.setAppElement(document.getElementById("root"));

  return (
    <div id="ModalConfirmInfos">
      <button id="openModal" onClick={() => setShowModal(true)}>
        Valider
      </button>
      <ReactModal
        isOpen={showModal}
        contentLabel="onRequestClose Example"
        className="Modal"
        overlayClassName="Overlay"
      >
        <div id="iconeCheck">
          <img src="/pictures/icons/icon-check.png" alt="icon-check" />
        </div>
        <p className="modalQuote">
          Êtes vous sûr(e) de valider <br /> ces informations ?
        </p>
        <p className="modalQuote">{props.value}</p>
        <div id="sectionButton">
          <button
            className="modalButton"
            onClick={() => {
              setShowModal(false);
              sendingUpdate(idVehicle, kmToUpdate.join(""), todayEng);
              history.push("/");
              dispatch({ type: props.type, value: today });
            }}
          >
            <img src="/pictures/icons/icon-check.png" alt="icon-check" />
          </button>
          <button className="modalButton" onClick={() => setShowModal(false)}>
            <img src="/pictures/icons/icon-close.png" alt="icon-close" />
          </button>
        </div>
      </ReactModal>
    </div>
  );
}
