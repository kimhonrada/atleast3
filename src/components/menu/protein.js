import React, { useState } from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Protein = ({ updateList }) => {
  // const [protein, setProtein] = useState("");

  const handleChange = (e) => {
    updateList(e.target.value);
  };

  return (
    <>
      <div>
        <label htmlFor='proteinForm' className='form-label'>
          protein
        </label>
        <select
          className='form-select'
          aria-label='Default select example'
          onChange={handleChange}
        >
          <option>Choose an ingredient</option>
          <option value='chicken'>chicken</option>
          <option value='beef'>beef</option>
          <option value='pork'>pork</option>
        </select>
      </div>
    </>
  );
};

export default Protein;
