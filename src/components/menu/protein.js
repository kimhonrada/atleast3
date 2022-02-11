import React from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Protein = () => {
  return (
    <>
      <label htmlFor='proteinForm' className='form-label'>
        protein
      </label>
      <select className='form-select' aria-label='Default select example'>
        <option value='1'>One</option>
        <option value='2'>Two</option>
        <option value='3'>Three</option>
      </select>
    </>
  );
};

export default Protein;
