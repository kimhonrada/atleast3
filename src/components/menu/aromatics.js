import React, { useState } from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Aromatics = () => {
  const [aromatic, setAromatic] = useState("banana");

  const handleChange = (e) => {
    console.log(e.target.value);
    setAromatic(e.target.value);
  };

  return (
    <>
      <label htmlFor='aromaticsForm' className='form-label'>
        aromatics
      </label>
      <p>current choice is {aromatic}</p>
      <select
        className='form-select'
        aria-label='Default select example'
        onChange={handleChange}
      >
        <option value='garlic'>Garlic</option>
        <option value='onion'>Onion</option>
        <option value='ginger'>Ginger</option>
      </select>
    </>
  );
};

export default Aromatics;
