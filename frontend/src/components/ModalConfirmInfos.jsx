import React, { useState } from "react";
import ReactModal from "react-modal";
import "./style/ModalConfirmInfos.scss";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function ModalConfirmInfos(props) {
  const [showModal, setShowModal] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  let date = new Date();
  let Month = "";
  if (date.getMonth() + 1 < 10) {
    Month = "0" + parseInt(date.getMonth() + 1);
  }
  const today = `${date.getDate()}-${Month}-${date.getFullYear()}`;
  // ReactModal.setAppElement("#yourAppElement");
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
