import React from 'react';
import './style.css';
import Button from '../Button';
import { useHistory } from 'react-router-dom';

const HalfScreenText = ({ text, section }) => {
  const history = useHistory();

  return (
    <div className="text">
      <h1>{text.title}</h1>
      <p>{text.description}</p>
      {section && section === 'home' ? (
        <>
          <br />
          <Button
            type="button"
            value="get started!"
            onClick={() => history.push('/signup')}
          />
        </>
      ) : null}
    </div>
  );
};

export default HalfScreenText;
