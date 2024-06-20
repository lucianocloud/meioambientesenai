import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2024 Luciano de Souza. Todos os direitos reservados.</p>
      <div className="social-icons">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;