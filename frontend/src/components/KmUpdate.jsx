import React from "react";
import { connect } from "react-redux";
import "./style/KmUpdate.scss";

function KmUpdate(props) {
  return (
    <div id="kmUpdate">
      <div id="counterKm">
        {props.kmToUpdate.map((num, i) => {
          return <p key={i}>{num}</p>;
        })}
      </div>

      <button>Valider</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    kmToUpdate: state.kmToUpdate
  };
};

export default connect(mapStateToProps)(KmUpdate);
