import React from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import "./reset.css"

function App() {
  return (
    <div className="App">
      <HomePage />
      <NavBar />
    </div>
  );
}

export default App;
