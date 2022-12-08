import Button from "@mui/material/Button";
import "./App.css";
import Cards from "./components/Cards";
import React from "react";

import { BrowserRouter as Router, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <div id="nav">
        <Button variant="outlined">Home</Button>
        <Button variant="outlined">Logout</Button>
      </div>

      <h1>Memory Game</h1>
      <Cards />
    </div>
  );
}

export default App;
