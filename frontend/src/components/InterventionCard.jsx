import React from "react";

export default function InterventionCard(props) {
  return (
    <div>
      <div className="EventBox BoxEvent">
        <img
          src={`/pictures/icons/blue_${props.item.sousFamille}.png`}
          alt={props.item.sousFamille}
        />
        <div className="InfoBox">
          <h2>{props.item.elements}</h2>
          <p>Dans {props.item.prochaineEcheance} km</p>
        </div>
      </div>
    </div>
  );
}
