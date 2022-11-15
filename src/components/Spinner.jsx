import React from 'react';
import '../assets/css/spinner.css';

export const Spinner = () => {
  return (
    <div className="lds-ripple">
      <div></div>
      <div></div>
    </div>
  )
};
