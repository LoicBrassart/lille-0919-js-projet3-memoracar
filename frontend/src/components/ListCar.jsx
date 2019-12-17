import React, { useState } from "react";
import "./style/ListCar.scss";

export default function ListCar() {
  const [ok, setOk] = useState("");

  return (
    <div className="intFamilies">
      <div className="icones">
        <div className="module" id="moteur">
          <div id="imgIcone">
            <img src="/pictures/icons/blue_motor.png" id="motor" alt="/" />
            <h1>Moteur</h1>
          </div>
        </div>

        <div className="module">
          <div id="imgIcone">
            <img src="/pictures/icons/blue_car_tire.png" id="tires" alt="/" />
            <div>
              <h1>Pneus</h1>
            </div>
          </div>
        </div>

        <div className="module">
          <div id="imgIcone">
            <img src="/pictures/icons/blue_chassis.png" id="frame" alt="/" />
            <div>
              <h1>Chassis</h1>
            </div>
          </div>
        </div>

        <div className="module">
          <div id="imgIcone">
            <img
              src="/pictures/icons/blue_electricity.png"
              id="electricity"
              alt="/"
            />

            <h1>Electricité</h1>
          </div>
        </div>

        <div className="module">
          <div id="imgIcone">
            <img
              src="/pictures/icons/red_tailpipe.png"
              id="exhaust"
              alt="Logo"
            />
            <div>
              <h1>Echappement</h1>
            </div>
          </div>
        </div>

        <div className="module">
          <div id="imgIcone">
            <img src="/pictures/icons/blue_brake.png" id="brakes" alt="/" />
            <div>
              <h1>Freins</h1>
            </div>
          </div>
        </div>

        <div className="module">
          <div id="imgIcone">
            <img src="/pictures/icons/blue_bodywork.png" id="bodyCar" alt="/" />
            <div>
              <h1>Carrosserie</h1>
            </div>
          </div>
        </div>

        <div className="module">
          <div id="imgIcone">
            <img
              src="/pictures/icons/orange_technical_control.png"
              id="technicalControl"
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
