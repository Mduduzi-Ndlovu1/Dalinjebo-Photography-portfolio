import React, { useState } from 'react';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import navlists from '../constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleNavLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="header" id="home">
      <nav>
        <div className="nav__header">
          <div className="nav__logo">
            <Link to="/">
              <img src="src/assets/Dali Logo.png" alt="logo-white" />
            </Link>
          </div>
          <div className="nav__menu__btn" id="menu-btn" onClick={handleMenuToggle}>
            {isOpen ? <RiCloseLine /> : <RiMenuLine />}
          </div>
        </div>
        <ul className={`nav__links ${isOpen ? 'open' : ''} text-base`} id="nav-links">
          {navlists.map((item) => (
            <li key={item.id} onClick={handleNavLinkClick}>
              <Link to={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
