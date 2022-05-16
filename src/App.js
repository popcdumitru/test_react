import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Date from "./Date";
import Add from "./Add";
import Load from "./Load";
import Produs from "./Produs";
import Ex1 from "./Ex1";

function App() {
  return (
    <div className="App">
      <div>
        <Ex1 />
        <Date />
        <Add />
        <Load />
        <br />
      </div>
    </div>
  );
}

export default App;
