import React from "react";
import ListCar from "./ListeCar";
import NavBar from "./NavBar";
import Historic from "./Historic";
import IconList from "./IconList";

function HomePage() {
  return (
    <div>
      <ListCar />
      <IconList />
      <Historic />
      <NavBar />
    </div>
  );
}

export default HomePage;
