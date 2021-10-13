import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import { Button } from "../Button/Button";
import "./Navbar.css";


// async function btnClick() {
//   const response = await fetch(
//     'http://localhost:8080/api/login',
//     { method: "GET" },
//   );

//   if (response.status === 200) {
//     window.location.replace(response.text);
//   } else {
//     console.error(`Error: ${response.statusText}`);
//   }
// }

const getSpotifyUserLogin = () => {
    fetch("http://localhost:8080/api/login")
    .then((response) => response.text())
    .then(response => {
      window.location.replace(response);
    })
  }

// function btnClick() {
//   console.log("button");
//   const getLoginPage = () => {
//     console.log("button 2");
//     fetch("http://localhost:8081/api/login")
//       .then((response) => response.text())
//       .then((response) => {
//         window.location.replace(response);
//       });
//   };
// }

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">SoundSource</h1>
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
        <Button className="loginbtn" onClick={getSpotifyUserLogin}>
          Login
        </Button>
      </nav>
    );
  }
}

export default Navbar;
