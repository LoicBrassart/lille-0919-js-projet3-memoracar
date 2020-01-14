import React from "react";

export default function InterventionCard(props) {
  return (
    <div>
      <div className="BoxEvent">
        <img
          src={`/pictures/icons/blue_${props.item.sousFamille}.png`}
          alt={props.item.sousFamille}
        />
        <div className="InfoBox">
          <h2>{props.item.elements}</h2>
          {props.item.prochaineEcheance ? (
            <p>Dans {props.item.prochaineEcheance} km</p>
          ) : (
            <p>A {props.item.km} km</p>
          )}
        </div>
      </div>
    </div>
  );
}
