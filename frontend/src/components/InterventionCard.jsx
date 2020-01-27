//component child of intervention showing each intervention

import React from "react";

export default function InterventionCard(props) {
  let niveau = "orange";

  //function to calculate and attribute the color of the emergency to intervene
  function echeance() {
    if (
      props.item.trajetFaitPourcentage > 1 ||
      props.item.trajetFaitPourcentage < 0
    ) {
      return (niveau = "red");
    }
    if (
      props.item.trajetFaitPourcentage < 0.9 ||
      !props.item.trajetFaitPourcentage
    ) {
      return (niveau = "blue");
    } else {
      return niveau;
    }
  }

  return (
    <div>
      <div className="BoxEvent">
        {
          (echeance(),
          (
            <img
              src={`/pictures/icons/${props.item.famille}/${props.item.sousFamille}/${niveau}_${props.item.sousFamille}.png`}
              alt={props.item.sousFamille}
            />
          ))
        }

        {props.item.prochaineEcheance ? (
          <div className="InfoBox">
            <h2>{props.item.elements}</h2>
            {props.item.prochaineEcheance < 0 ? (
              <p>Passée de {Math.abs(props.item.prochaineEcheance)} km</p>
            ) : (
              <p>Dans {Math.abs(props.item.prochaineEcheance)} km</p>
            )}
          </div>
        ) : (
          <div className="InfoBox">
            <h2>{props.item.elements}</h2>
            <p>A {props.item.km} km</p>
          </div>
        )}
      </div>
    </div>
  );
}
