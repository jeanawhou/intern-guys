import React from 'react';
import './style.css';

const SectionTitle = ({ text, subtitle }) => {
  return (
    <div className="section-title">
      <h1>{text}</h1>
      {subtitle || null}
    </div>
  );
};

export default SectionTitle;
