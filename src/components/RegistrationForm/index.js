import React from 'react';
import Button from '../Button';
import SectionTitle from '../SectionTitle';
import TextInput from '../TextInput';
import './style.css';
import Images from '../../Images';
import BottomText from '../BottomText';
import { Link } from 'react-router-dom';

const RegistrationForm = () => {
  return (
    <div className="registration-form">
      <div className="logo-placeholder">
        <img className="logo" src={Images.IG_LOGO} alt="Intern guys register" />
      </div>
      <div className="forms">
        <form>
          <TextInput placeholder="Name" type="text" />
          <TextInput placeholder="Email" type="email" />
          <TextInput placeholder="Password" type="password" />
          <Button type="submit" value="Register" />
          <BottomText>
            Already have an account? &nbsp;
            <Link to={'/login'}>Login Here</Link>
          </BottomText>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
