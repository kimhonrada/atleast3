import React, { useState } from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Veggies = ({ updateList }) => {
  // const [veggies, setVeggies] = useState("");

  const handleChange = (e) => {
    updateList(e.target.value);
  };
  return (
    <>
      <label htmlFor='veggiesForm' className='form-label'>
        veggies
      </label>
      <select
        className='form-select'
        aria-label='Default select example'
        onChange={handleChange}
      >
        <option>Choose an ingredient</option>
        <option value='carrots'>carrots</option>
        <option value='brocolli'>brocolli</option>
        <option value='bell pepper'>bell pepper</option>
      </select>
    </>
  );
};

export default Veggies;
