import React from 'react';
import Images from '../../Images';
import './style.css';

const ChevronPageDown = () => {
  return (
    <>
      <img
        className="chevron-down"
        src={Images.CHEVRON_DOWN}
        alt="Scroll down"
      />
    </>
  );
};

export default ChevronPageDown;
