import React from 'react';
import './style.css';
const HalfScreenText = ({ text }) => {
  return (
    <div className="text">
      <h1>{text.title}</h1>
      <p>{text.description}</p>
    </div>
  );
};

export default HalfScreenText;
