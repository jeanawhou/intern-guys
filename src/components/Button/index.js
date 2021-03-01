import React from 'react';
import './style.css';

const Button = (props) => {
  return (
    <div className="custom-button">
      <input {...props} />
    </div>
  );
};

export default Button;
