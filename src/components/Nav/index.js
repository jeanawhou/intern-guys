import React, { useEffect } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import './style.css';

const NavItems = ({ navItems, socialItems }) => {
  const { hash } = useLocation();
  const history = useHistory();
  const nav = navItems.length
    ? navItems.map((item, key) => {
        return (
          <Link to={`${item.link}`} key={key}>
            {item.title}
          </Link>
        );
      })
    : null;

  const scrollIntoView = async (elem) => {
    if (!elem) {
      await history.push('/');
      elem.scrollIntoView({ block: 'start', behavior: 'smooth' });
    } else {
      elem.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      scrollIntoView(el);
    }
  }, [hash]);

  const social = socialItems.length
    ? socialItems.map((item, key) => {
        return <img src={item.logo} alt={item.name} key={key} />;
      })
    : null;

  return (
    <div className="nav">
      <div className="nav-items" key="nav">
        {nav}
      </div>

      <div className="social" key="social">
        {social}
      </div>
    </div>
  );
};

export default NavItems;
