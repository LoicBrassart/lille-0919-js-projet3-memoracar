import { connect } from "react-redux";
import React from "react";

function AddCar() {
  return (
    <div className="Marque">
      {Marque.map(item => {
        return { item };
      })}
    </div>
  );
}
const mapStateToProps = state => {
  return {
    Marque: state.Marque
  };
};

export default connect(mapStateToProps)(AddCar);
