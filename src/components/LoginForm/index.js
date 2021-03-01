import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import SectionTitle from '../SectionTitle';
import Images from '../../Images';
import TextInput from '../TextInput';
import BottomText from '../BottomText';
import './style.css';

const LoginForm = () => {
  return (
    <div className="login-form">
      <div className="logo-placeholder">
        <img className="logo" src={Images.IG_LOGO} alt="Intern guys login" />
      </div>
      <div className="forms">
        <form>
          <TextInput placeholder="Email" type="email" />
          <TextInput placeholder="Password" type="password" />
          <Button type="submit" value="Login" />
          <BottomText>
            New member? &nbsp;
            <Link to={'/signup'}>Join us!</Link>
          </BottomText>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
