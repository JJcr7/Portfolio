import React from "react";
import './Header.css'

const Header = () => {
    
    

  return (
    <header className="header">
      {/* Logo element (replace with your logo) */}
      <div className="logo">Your Logo</div>

      {/* Navigation links */}
      <nav className="navigation">
        <a href="#portfolio" className="nav-link">Portfolio</a>
        <a href="#about" className="nav-link">About</a>
        <a href="#projects" className="nav-link">Projects</a>
        <a href="#contact" className="nav-link">Contact Me</a>
      </nav>
    </header>
  );
};

export default Header;

