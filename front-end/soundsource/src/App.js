// import React from "react";
// import Navbar from "./components/Navbar/Navbar";
// import "./App.css";
// import { Homepage } from "./components/Homepage/Homepage";
// import "bootstrap/dist/css/bootstrap.min.css";

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <Homepage />
//     </div>
//   );
// }

// export default App;

import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import { Homepage } from "./components/Homepage/Homepage";
import { PlaylistsPage } from "./components/PlaylistsPage/PlaylistsPage";

function App() {
  return (
    <div className="bodyApp">
      <Navbar />
      <Switch>
        <Route path="/" element={<Homepage />} />
        <Route path="/playlists" element={<PlaylistsPage />} />
      </Switch>
    </div>
  );
}

export default App;
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
