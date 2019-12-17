import React from "react";

export default function InterventionCard() {
  return (
    <div>
      <div className="EventBox BoxEvent">
        <img src={props.item.icon} alt={props.item.title} />
        <div className="InfoBox">
          <p>{props.item.title}</p>
          <p>fait le {props.item.date}</p>
          <p>à {props.item.place}</p>
        </div>
      </div>
    </div>
  );
}
