import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import { MenuItems } from "./MenuItems";
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

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <nav className="NavbarItems">
      <img src="/images/wave.png" alt="note" className="wave" />
      <a href="/" className="navbar-logo">
        SoundSource {username}
      </a>

      <div className="menu-icon" onClick={this.handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
      <div className="navLinkDiv"></div>
      <div className="navButton">
        <Button className="loginbtn" onClick={getSpotifyUserLogin}>
          Login
        </Button>
      </div>
    </nav>
  );
};
