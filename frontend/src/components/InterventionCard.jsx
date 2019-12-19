import React from "react";

export default function InterventionCard(props) {
  return (
    <div>
      <div className="EventBox BoxEvent">
        <img src={props.item.icon} alt={props.item.title} />
        <div className="InfoBox">
          <p>{props.item.subtitle}</p>
          <p>{props.item.km}</p>
        </div>
      </div>
    </div>
  );
}
