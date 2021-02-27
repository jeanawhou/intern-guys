import React from 'react';
import HalfScreenText from '../HalfScreenText';
import './style.css';

const TextRows = ({ rows }) => {
  return (
    <div className="text-rows">
      {rows.length
        ? rows.map((item, key) => {
            return <HalfScreenText key={key} text={item} />;
          })
        : null}
    </div>
  );
};

export default TextRows;
