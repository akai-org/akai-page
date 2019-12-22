import React from 'react';
import './placeholder.scss';

const Spinner = () => {
  return (
    <div className='spinner-container'>
      <img
        className='logo-spinner'
        src='/assets/images/logo-dark.svg'
        alt='logo.svg'
      ></img>
      <h2>Strona w budowie</h2>
    </div>
  );
};

export default Spinner;
