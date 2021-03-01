import React from 'react';
import HalfScreenText from '../HalfScreenText';
import './style.css';

const HalfScreenImage = ({ image, imagePos, alt, text, idx, section }) => {
  return (
    <div className="halfscreen-image">
      {imagePos === 'right' || idx % 2 === 0 ? (
        <>
          <HalfScreenText section={section} text={text} />
          <img src={image} alt={alt} />
        </>
      ) : (
        <>
          <img src={image} alt={alt} />
          <HalfScreenText section={section} text={text} />
        </>
      )}
    </div>
  );
};

export default HalfScreenImage;
