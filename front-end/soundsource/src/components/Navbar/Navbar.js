import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import { Button } from "../Button/Button";
import "./Navbar.css";

const getSpotifyUserLogin = () => {
  fetch("http://localhost:8080/api/login")
    .then((response) => response.text())
    .then((response) => {
      window.location.replace(response);
    });
};

export const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const [username, setUsername] = useState([]);

  const getUsername = async () => {
    try {
      if (username == "") {
        const name = await axios.get("http://localhost:8080/api/username");
        setUsername(name.data);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getUsername();
    }, 1000);

    return () => clearInterval(interval);
  }),
    [];
  return (
    <nav className="NavbarItems">
      <div className="menu-items">
        <div>
          {" "}
          <img src="/images/wave.png" alt="note" className="wave" />
          <a href="/" className="navbar-logo">
            SoundSource
          </a>
        </div>
        {username !== "ERROR" && <p className="username">Hello, {username} </p>}
        {username === "ERROR" && (
          <Button className="loginbtn" onClick={getSpotifyUserLogin}>
            Login
          </Button>
        )}
      </div>
    </nav>
  );
};
