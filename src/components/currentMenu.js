import React, { useState } from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const CurrentMenu = ({ currentList }) => {
  const list = currentList.map((item) => <li key={item}>{item}</li>);

  return (
    <div>
      <h1>Current Menu</h1>
      {list}
    </div>
  );
};

export default CurrentMenu;
