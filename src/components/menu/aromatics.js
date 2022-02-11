import React, { useState } from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Aromatics = () => {
  const [aromatic, setAromatic] = useState("");

  const handleChange = (e) => {
    setAromatic(e.target.value);
  };

  return (
    <>
      <label htmlFor='aromaticsForm' className='form-label'>
        aromatics - {aromatic}
      </label>
      <select
        className='form-select'
        aria-label='Default select example'
        onChange={handleChange}
      >
        <option value='garlic'>garlic</option>
        <option value='onion'>onion</option>
        <option value='ginger'>ginger</option>
      </select>
    </>
  );
};

export default Aromatics;
