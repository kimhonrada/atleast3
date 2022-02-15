import React, { useState } from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Aromatics from "/src/components/menu/aromatics.js";
import Veggies from "/src/components/menu/veggies.js";
import Protein from "/src/components/menu/protein.js";
import Carbs from "/src/components/menu/carbs.js";
import CurrentMenu from "/src/components/currentMenu.js";

const App = () => {
  // const currentList = ["rice", "chicken", "carrots"];

  const [currentList, setCurrentList] = useState([]);

  const updateList = (newItem) => {
    if (!currentList.includes(newItem)) {
      setCurrentList((list) => [...list, newItem]);
    }
  };

  return (
    <>
      <h1>at least 3</h1>
      <Protein updateList={updateList} />
      <Veggies />
      <Carbs />
      <CurrentMenu currentList={currentList} />
    </>
  );
};

export default App;
