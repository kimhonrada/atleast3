import React from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Aromatics = () => {
  return (
    <>
      <label htmlFor='aromaticsForm' className='form-label'>
        aromatics
      </label>
      <select className='form-select' aria-label='Default select example'>
        <option value='1'>One</option>
        <option value='2'>Two</option>
        <option value='3'>Three</option>
      </select>
    </>
  );
};

export default Aromatics;
