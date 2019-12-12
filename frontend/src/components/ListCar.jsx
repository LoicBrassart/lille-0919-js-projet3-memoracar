import React, { useState } from "react";
import "./style/ListCar.scss";

export default function ListCar() {
  const [ok, setOk] = useState("");

  return (
    <div className="intFamilies">
      <div className="icones">
        <div className="module" id="moteur">
          <div id="imgIcone">
            <p>
              <a href="ok">
                <span>{ok}</span>
              </a>
            </p>
            <img
              src="/pictures/icons/blue motor.png"
              id="moteur"
              alt="/"
              onClick={() => {
                setOk(ok === "" ? "Tout est parfait!" : "");
              }}
            />
            <h1>Moteur</h1>
          </div>
        </div>

        <div className="module" id="pneus">
          <div id="imgIcone">
            <img src="/pictures/icons/blue car tire.png" id="pneus" alt="/" />
            <div>
              <h1>Pneus</h1>
            </div>
          </div>
        </div>

        <div className="module" id="chassis">
          <div id="imgIcone">
            <img src="/pictures/icons/blue chassis.png" id="chassis" alt="/" />
            <div>
              <h1>Chassis</h1>
            </div>
          </div>
        </div>

        <div className="module" id="electricité">
          <div id="imgIcone">
            <img
              src="/pictures/icons/blue electricity.png"
              id="electricite"
              alt="/"
            />

            <h1>Electricité</h1>
          </div>
        </div>

        <div className="module" id="echappement">
          <div id="imgIcone">
            <img
              src="/pictures/icons/red tailpipe.png"
              id="echappement"
              alt="Logo"
            />
            <div>
              <h1>Echappement</h1>
            </div>
          </div>
        </div>

        <div className="module" id="freins">
          <div id="imgIcone">
            <img src="/pictures/icons/blue brake.png" id="freins" alt="/" />
            <div>
              <h1>Freins</h1>
            </div>
          </div>
        </div>

        <div className="module" id="carosserie">
          <div id="imgIcone">
            <img
              src="/pictures/icons/blue bodywork.png"
              id="carrosserie"
              alt="/"
            />
            <div>
              <h1>Carrosserie</h1>
            </div>
          </div>
        </div>

        <div className="module" id="controle technique">
          <div id="imgIcone">
            <img
              src="/pictures/icons/orange technical control.png"
              id="controletechnique"
              alt="/"
            />
            <div>
              <h1>Contrôle technique</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
