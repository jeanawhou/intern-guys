import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import NavItems from '../Nav';
import './style.css';
import Images from '../../Images';

const Header = (props) => {
  const history = useHistory();

  const navItems = [
    {
      title: 'home',
      link: '/'
    },
    { title: 'how does it work?', link: '/#how-does-it-work' },
    {
      title: 'about us',
      link: '/about'
    },
    {
      title: 'contact',
      link: '/contact'
    },
    {
      title: 'login',
      link: '/login'
    }
  ];

  const socialItems = [
    {
      name: 'facebook',
      link: '#',
      logo: Images.FACEBOOK
    },
    {
      name: 'twitter',
      link: '#',
      logo: Images.TWITTER
    }
  ];

  return (
    <div className="header">
      <div className="logo">
        <img
          src={Images.IG_LOGO}
          alt="Intern guys"
          onClick={() => history.push('/')}
        />
      </div>
      <NavItems
        className="right-nav"
        navItems={navItems}
        socialItems={socialItems}
      />
    </div>
  );
};

export default Header;
