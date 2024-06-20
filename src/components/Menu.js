import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Menu.css';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`menu-container ${isOpen ? 'open' : ''}`}>
      <div className="menu-icon" onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </div>
      <nav className={`menu ${isOpen ? 'show' : ''}`}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#services">Serviços</a></li>
          <li><a href="#contact">Contatos</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
