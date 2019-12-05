import React from "react";
import "./App.css";
import Identification from "./pages/Identification";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Identification />
      <HomePage />
      <NavBar />
    </div>
  );
}

export default App;
