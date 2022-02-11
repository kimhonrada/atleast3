import React from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <h1>at least 3</h1>
      <label htmlFor='aromaticsForm' className='form-label'>
        aromatics
      </label>
      <select className='form-select' aria-label='Default select example'>
        <option value='1'>One</option>
        <option value='2'>Two</option>
        <option value='3'>Three</option>
      </select>
      <label htmlFor='proteinForm' className='form-label'>
        protein
      </label>
      <select className='form-select' aria-label='Default select example'>
        <option value='1'>One</option>
        <option value='2'>Two</option>
        <option value='3'>Three</option>
      </select>
      <label htmlFor='veggieForm' className='form-label'>
        veggies
      </label>
      <select className='form-select' aria-label='Default select example'>
        <option value='1'>One</option>
        <option value='2'>Two</option>
        <option value='3'>Three</option>
      </select>
    </>
  );
};

export default App;
