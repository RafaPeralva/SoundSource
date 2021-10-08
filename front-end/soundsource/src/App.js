import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import { Homepage } from "./components/Homepage/Homepage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
    </div>
  );
}

export default App;
