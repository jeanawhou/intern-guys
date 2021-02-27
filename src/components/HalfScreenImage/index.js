import React from 'react';
import HalfScreenText from '../HalfScreenText';
import './style.css';

const HalfScreenImage = ({ image, imagePos, alt, text, idx }) => {
  return (
    <div className="halfscreen-image">
      {imagePos === 'right' || idx % 2 === 0 ? (
        <>
          <HalfScreenText text={text} />
          <img src={image} alt={alt} />
        </>
      ) : (
        <>
          <img src={image} alt={alt} />
          <HalfScreenText text={text} />
        </>
      )}
    </div>
  );
};

export default HalfScreenImage;
