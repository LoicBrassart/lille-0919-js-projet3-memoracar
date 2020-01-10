import React from "react";
import "./style/ListCar.scss";
import { Link } from "react-router-dom";

export default function ListCar() {
  return (
    <div className="intFamilies">
      <div className="icones">
        <div className="module">
          <div id="imgIcone">
            <Link to="intervention/moteur">
              <img src="/pictures/icons/blue_moteur.png" id="motor" alt="/" />
              <h1>Moteur</h1>
            </Link>
          </div>
        </div>

        <div className="module">
          <div id="imgIcone">
            <Link to="intervention/pneus">
              <img src="/pictures/icons/blue_pneus.png" id="tires" alt="/" />
            </Link>

            <div>
              <h1>Pneus</h1>
            </div>
          </div>
        </div>

        <div className="module">
          <div id="imgIcone">
            <Link to="intervention/chassis">
              <img src="/pictures/icons/blue_chassis.png" id="frame" alt="/" />
            </Link>
            <div>
              <h1>Chassis</h1>
            </div>
          </div>
        </div>

        <div className="module">
          <div id="imgIcone">
            <Link to="intervention/electricite">
              <img
                src="/pictures/icons/blue_electricite.png"
                id="electricity"
                alt="/"
              />

              <h1>Electricité</h1>
            </Link>
          </div>
        </div>

        <div className="module">
          <div id="imgIcone">
            <Link to="intervention/echappement">
              <img
                src="/pictures/icons/red_echappement.png"
                id="exhaust"
                alt="Logo"
              />

              <h1>Echappement</h1>
            </Link>
          </div>
        </div>

        <div className="module">
          <div id="imgIcone">
            <Link to="intervention/freins">
              <img src="/pictures/icons/blue_freins.png" id="brakes" alt="/" />

              <div>
                <h1>Freins</h1>
              </div>
            </Link>
          </div>
        </div>

        <div className="module">
          <div id="imgIcone">
            <Link to="intervention/carrosserie">
              <img
                src="/pictures/icons/blue_carrosserie.png"
                id="bodyCar"
                alt="/"
              />

              <div>
                <h1>Carrosserie</h1>
              </div>
            </Link>
          </div>
        </div>

        <div className="module">
          <div id="imgIcone">
            <Link to="intervention/controle_technique">
              <img
                src="/pictures/icons/orange_controle_technique.png"
                id="technicalControl"
                alt="/"
              />

              <div>
                <h1>Contrôle technique</h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
