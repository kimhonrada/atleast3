import React, { useState } from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Carbs = () => {
  const [carbs, setCarbs] = useState("");

  const handleChange = (e) => {
    setCarbs(e.target.value);
  };

  return (
    <>
      <label htmlFor='carbsForm' className='form-label'>
        carbs - {carbs}
      </label>
      <select
        className='form-select'
        aria-label='Default select example'
        onChange={handleChange}
      >
        <option value='rice'>rice</option>
        <option value='pasta'>pasta</option>
        <option value='potato'>potato</option>
      </select>
    </>
  );
};

export default Carbs;
