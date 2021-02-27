import React from 'react';
import NavItems from '../Nav';
import './style.css';
import Images from '../../Images';

const Header = (props) => {
  const navItems = [
    {
      title: 'home',
      link: '#'
    },
    { title: 'how does it work?', link: '#' },
    {
      title: 'about us',
      link: '#'
    },
    {
      title: 'contact',
      link: '#'
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
        <img src={Images.IG_LOGO} alt="Intern guys" />
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
