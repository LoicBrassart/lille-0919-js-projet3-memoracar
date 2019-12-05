import React from "react";
import ListCar from "./ListeCar";
import NavBar from "./NavBar";
import Historic from "./Historic";

function HomePage() {
  return (
    <div>
      <ListCar />
      <Historic />
      <NavBar />
    </div>
  );
}

export default HomePage;
