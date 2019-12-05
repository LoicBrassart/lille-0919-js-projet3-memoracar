import React from "react";
import "./style/IconList.scss";

function IconList() {
  return (
    <div className="intFamilies">
      <div className="icones">
        <div className="module" id="moteur">
          <h1>Moteur</h1>
        </div>
        <div className="module" id="freins">
          <h1>Freins</h1>
        </div>
        <div className="module" id="chassis">
          <h1>Chassis</h1>
        </div>
        <div className="module" id="pneus">
          <h1>Pneus</h1>
        </div>

        <div className="module" id="carrosserie">
          <h1>Carrosserie</h1>
        </div>
        <div className="module" id="electricité">
          <h1>Electricite</h1>
        </div>
        <div className="module" id="echeances">
          <h1>Echeances</h1>
        </div>
      </div>
    </div>
  );
}

export default IconList;
