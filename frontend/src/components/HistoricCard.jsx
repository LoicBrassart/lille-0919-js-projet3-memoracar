import React from "react";

export default function HistoricCard(props) {
  return (
    <div>
      <div className="EventBox BoxEvent">
        <img
          src={`/pictures/icons/blue_${props.item.sousFamille}.png`}
          alt={props.item.sousFamille}
        />
        <div className="InfoBox">
          <h2>{props.item.elements}</h2>
          {props.item.prochaineEcheance ? (
            <p>Dans {props.item.prochaineEcheance} km</p>
          ) : (
            <p>
              Fait à {props.item.km} km, le {props.item.date}, à{" "}
              {props.item.nom} {props.item.franchise}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
