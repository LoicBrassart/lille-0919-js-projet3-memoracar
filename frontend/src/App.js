import React from "react";
import "./App.css";
import ModalConfirmInfos from "./components/ModalConfirmInfos";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <HomePage />
      <NavBar />
      <ModalConfirmInfos />
    </div>
  );
}

export default App;
