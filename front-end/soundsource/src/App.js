import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import { Homepage } from "./components/Homepage/Homepage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // const handleLoginClick = () => {
  //   const getLoginPage = () => {
  //     fetch("http:localhost:8080/api/login")
  //       .then((response) => response.text())
  //       .then((response) => {
  //         window.location.replace(response);
  //       });
  //   };
  // };
  return (
    <div className="App">
      <Navbar />
      <Homepage />
    </div>
  );
}

export default App;
