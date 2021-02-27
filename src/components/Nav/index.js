import React from 'react';
import './style.css';

const NavItems = ({ navItems, socialItems }) => {
  const nav = navItems.length
    ? navItems.map((item, key) => {
        return (
          <a href={item.link} key={key}>
            {item.title}
          </a>
        );
      })
    : null;

  const social = socialItems.length
    ? socialItems.map((item, key) => {
        return <img src={item.logo} alt={item.name} key={key} />;
      })
    : null;

  return (
    <div className="nav">
      <div className="nav-items">{nav}</div>

      <div className="social">{social}</div>
    </div>
  );
};

export default NavItems;
