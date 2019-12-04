import React from "react";
import ListCar from "./ListeCar";
import NavBar from "./NavBar";
import Historic from "./Historic";

function HomePage() {
  return (
    <div>
      <ListCar />
      <NavBar />
      <Historic />
    </div>
  );
}

export default HomePage;
