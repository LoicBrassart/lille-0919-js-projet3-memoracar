import React from "react";

export default function InterventionCard(props) {
  let niveau = "orange";
  function echeance() {
    if (props.item.prochaineEcheancePourcentage > 1) {
      return (niveau = "red");
    }
    if (
      props.item.prochaineEcheancePourcentage < 0.9 ||
      !props.item.prochaineEcheance
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
