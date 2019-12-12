import CarCard from "./CarCard";
import React, { useState } from "react";
import ListCar from "./ListCar";
import Historic from "./Historic";
import NavBar from "./NavBar";

function HomePage() {
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      <CarCard />
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {toggle ? "historic" : "ListCar"}
      </button>
      {toggle ? <ListCar /> : <Historic />}
      <NavBar />
    </div>
  );
}

export default HomePage;
