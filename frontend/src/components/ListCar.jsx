import React, { useState } from "react";
import "./style/ListCar.scss";

function ListCar() {
  const [ok, setOk] = useState("");

  return (
    <div className="intFamilies">
      <div className="icones">
        <div className="module" id="moteur">
          <div id="imgIcone">
            <p>{ok}</p>
            <button
              onClick={() => {
                setOk(ok === "" ? "Tout est parfait !" : "");
              }}
            >
              Moteur
            </button>
          </div>
        </div>

        <div className="module" id="freins">
          <div id="imgIcone">
            <h1>Freins</h1>
          </div>
        </div>

        <div className="module" id="chassis">
          <div id="imgIcone">
            <h1>Chassis</h1>
          </div>
        </div>

        <div className="module" id="pneus">
          <div id="imgIcone">
            <h1>Pneus</h1>
          </div>
        </div>

        <div className="module" id="carrosserie">
          <div id="imgIcone">
            <h1>Carrosserie</h1>
          </div>
        </div>

        <div className="module" id="electricite">
          <div id="imgIcone">
            <h1>Electricite</h1>
          </div>
        </div>

        <div className="module" id="echeances">
          <div id="imgIcone">
            <h1>Echeances</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListCar;
