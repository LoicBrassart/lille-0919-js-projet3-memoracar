import React from "react";
import "./style/carCard.scss";
import axios from "axios";

export default class CarCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      date: ""
    };
  }
  componentDidMount() {
    axios.get("http://localhost:5000/user/1/vehicle").then(({ data }) => {
      console.log(data[0]);
      this.setState({ user: data[0] });
      let date = this.state.user.date_mileage;
      this.setState({ date: this.state.user.date_mileage.slice(0, 10) });
      console.log(date);
    });
  }
  render() {
    return (
      <div className="car">
        <img src="/pictures/ford.png"></img>
        <div className="info">
          <h2>Dernier scan le :{this.state.date}</h2>
          <h3>Kilométrage : {this.state.user.current_mileage}</h3>
          <h1>
            {this.state.user.brand} | {this.state.user.model}
          </h1>
          <h3>
            {this.state.user.motorisation} ({this.state.user.horse_power} CH)
            {this.state.user.production_year}
          </h3>
        </div>
      </div>
    );
  }
}
