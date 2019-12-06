import React from "react";
import carCard from "./CarCard";
import NavBar from "./NavBar";
import Historic from "./Historic";

function HomePage() {
  return (
    <div>
      <CarCard />
      <Historic />
    </div>
  );
}

export default HomePage;
