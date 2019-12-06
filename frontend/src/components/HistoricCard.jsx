import React from "react";

function HistoricCard(props) {
  return (
    <div>
      <div className="EventBox BoxEvent">
        <img src={props.item.icon} alt={props.item.title} />
        <div className="InfoBox">
          <p>{props.item.title}</p>
          <p>done at {props.item.date}</p>
        </div>
      </div>
    </div>
  );
}

export default HistoricCard;
