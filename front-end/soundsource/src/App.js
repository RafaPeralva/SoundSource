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

function App() {
  return (
    <div className="bodyApp">
      <Navbar />
      <Switch>
        {/* If the current URL is /about, this route is rendered
            while the rest are ignored */}

        <Route path="/" element={<Homepage />} />
        {/* Note how these two routes are ordered. The more specific
            path="/contact/:id" comes before path="/contact" so that
            route will render when viewing an individual contact */}

        {/* If none of the previous routes render anything,
            this route acts as a fallback.

            Important: A route with path="/" will *always* match
            the URL because all URLs begin with a /. So that's
            why we put this one last of all */}
        {/* // <Route path="/">
        //   <Homepage />
        // </Route> */}
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
