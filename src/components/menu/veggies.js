import React, { useState } from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Veggies = () => {
  const [veggies, setVeggies] = useState("");

  const handleChange = (e) => {
    setVeggies(e.target.value);
  };
  return (
    <>
      <label htmlFor='veggiesForm' className='form-label'>
        veggies - {veggies}
      </label>
      <select
        className='form-select'
        aria-label='Default select example'
        onChange={handleChange}
      >
        <option value='carrots'>carrots</option>
        <option value='brocolli'>brocolli</option>
        <option value='bell pepper'>bell pepper</option>
      </select>
    </>
  );
};

export default Veggies;
