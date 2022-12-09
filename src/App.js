import Button from "@mui/material/Button";
import "./App.css";
import Cards from "./components/Cards";
import React from "react";

import { BrowserRouter as Router, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <div className="nav">
        <Button variant="outlined" className="button">Home</Button>
        <Button variant="outlined" className="button">Logout</Button>
      </div>

      <h1 className="text">Memory Game</h1>
      <Cards />
    </div>
  );
}


export default App;
