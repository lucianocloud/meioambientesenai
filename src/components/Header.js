import React from 'react';
import logo from '../assets/logo.png';
import Menu from './Menu';
import './Header.css';

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Logo" className="logo" />
      <Menu />
    </header>
  );
};

export default Header;
