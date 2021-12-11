import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import { Homepage } from "./components/Homepage/Homepage";

function App() {
  return (
    <div className="bodyApp">
      <Navbar />
      <Switch>
        <Route path="/" element={<Homepage />} />
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
