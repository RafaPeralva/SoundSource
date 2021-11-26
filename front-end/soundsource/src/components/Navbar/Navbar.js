import React, { Component } from "react";
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

export class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <img src="/images/wave.png" alt="note" className="wave" />
        <a href="/" className="navbar-logo">
          SoundSource
        </a>

        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
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
        {/* <div className="navMenu"> */}
        <div className="navLinkDiv">
          <a className="navLink suggestSearchLink" href="/">
            Search+Suggest
          </a>
          <a className="navLink" href="/playlists">
            Playlists
          </a>
        </div>
        <div className="navButton">
          <Button className="loginbtn" onClick={getSpotifyUserLogin}>
            Login
          </Button>
        </div>
      </nav>
    );
  }
}

// export default Navbar;
