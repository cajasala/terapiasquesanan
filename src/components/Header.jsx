import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          Terapias Que Sanan
        </div>
        
        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <nav className={`nav ${isOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#inicio" onClick={() => setIsOpen(false)}>Inicio</a></li>
            <li><a href="#enfoque" onClick={() => setIsOpen(false)}>Nuestro Enfoque</a></li>
            <li><a href="#terapias" onClick={() => setIsOpen(false)}>Terapias</a></li>
            <li><a href="#evaluacion" className="btn-nav" onClick={() => setIsOpen(false)}>Evaluación</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
