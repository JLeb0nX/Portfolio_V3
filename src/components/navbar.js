// SpaceNav.jsx
import React, { useState, useEffect } from 'react';
import '../styles/navbar.css'; // Import the CSS file for styling

const SpaceNav = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="space-nav">
      <div className="nav-logo">Portfolio</div>
      <div className="nav-links">
        <a 
          href="#home" 
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
          className={activeSection === 'home' ? 'active' : ''}
        >
          <i className="fa-solid fa-home"></i>
          Accueil
        </a>
        <a 
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('about');
          }}
          className={activeSection === 'about' ? 'active' : ''}
        >
          <i className="fa-solid fa-user"></i>
          À propos
        </a>
        <a 
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('projects');
          }}
          className={activeSection === 'projects' ? 'active' : ''}
        >
          <i className="fa-solid fa-code"></i>
          Projets
        </a>
        <a 
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('contact');
          }}
          className={activeSection === 'contact' ? 'active' : ''}
        >
          <i className="fa-solid fa-envelope"></i>
          Contact
        </a>
      </div>
      <div className="mobile-nav">
        <button 
          className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
          <a 
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
          >
            <i className="fa-solid fa-home"></i>
            Accueil
          </a>
          <a 
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
            }}
          >
            <i className="fa-solid fa-user"></i>
            À propos
          </a>
          <a 
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('projects');
            }}
          >
            <i className="fa-solid fa-code"></i>
            Projets
          </a>
          <a 
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
          >
            <i className="fa-solid fa-envelope"></i>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default SpaceNav;