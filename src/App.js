import React from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Aromatics from "/src/components/menu/aromatics.js";
import Veggies from "/src/components/menu/veggies.js";
import Protein from "/src/components/menu/protein.js";

const App = () => {
  return (
    <>
      <h1>at least 3</h1>
      <Aromatics />
      <Protein />
      <Veggies />
    </>
  );
};

export default App;
