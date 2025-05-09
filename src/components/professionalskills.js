// ProfessionalSkills.jsx
import React, { useState } from 'react';
import '../styles/professionalskills.css'; // Import the CSS file for styling

const ProfessionalSkills = () => {
  const [activeCategory, setActiveCategory] = useState('réseaux');
  const [currentSlide, setCurrentSlide] = useState(0);

  const skills = {
    réseaux: [
      { name: 'GNS3', icon: '🌐', description: 'Virtualisation de réseaux' },
      { name: 'Cisco Packet Tracer', icon: '🔌', description: 'Simulation réseau' },
      { name: 'Wireshark', icon: '🦈', description: 'Analyse de paquets' },
      { name: 'Putty', icon: '💻', description: 'Emulateur de terminal' }
    ],
    développement: [
      { name: 'Visual Studio Code', icon: '👨‍💻', description: 'Éditeur de code' },
      { name: 'Github', icon: '📚', description: 'Plateforme open source de gestion de versions et de collaboration' },
      { name: 'Git', icon: '📚', description: 'Contrôle de version' },
      { name: 'React', icon: '⚛️', description: 'Framework JavaScript' },
      { name: 'Node.js', icon: '🟢', description: 'Runtime JavaScript' }
    ],
    virtualisation: [
      { name: 'Oracle Virtualbox', icon: '🖥️', description: 'Hyperviseur de type 2' },
      { name: 'VMWare Workstation', icon: '🖥️', description: 'Hyperviseur de type 2' },
      { name: 'Hyper-V', icon: '🖥️', description: 'Hyperviseur de type 1' },
    ],
    supervision: [
      { name: 'Cacti', icon: '🌵', description: 'Mesure de performances réseau et serveur' },
    ],
    cybersécurité: [
      { name: 'Kali Linux', icon: '🐉', description: 'Tests de pénétration' },
      { name: 'Nmap', icon: '🔍', description: 'Scanner réseau' },
      { name: 'Metasploit', icon: '🛡️', description: 'Framework de sécurité' },
      { name: 'Burp Suite', icon: '🕷️', description: 'Test de sécurité web' }
    ]
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev === skills[activeCategory].length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? skills[activeCategory].length - 1 : prev - 1
    );
  };

  return (
    <div className="professional-skills">
      <h3>Compétences Professionnelles</h3>
      <div className="skills-container">
        <div className="category-menu">
          {Object.keys(skills).map((category) => (
            <button
              key={category}
              className={`category-button ${activeCategory === category ? 'active' : ''}`}
              onClick={() => {
                setActiveCategory(category);
                setCurrentSlide(0);
              }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        <div className="carousel-container">
          <button className="carousel-button prev" onClick={prevSlide}>❮</button>
          <div className="carousel-content">
            {skills[activeCategory].map((skill, index) => (
              <div
                key={skill.name}
                className={`carousel-item ${index === currentSlide ? 'active' : ''}`}
              >
                <div className="skill-icon">{skill.icon}</div>
                <h4>{skill.name}</h4>
                <p>{skill.description}</p>
              </div>
            ))}
          </div>
          <button className="carousel-button next" onClick={nextSlide}>❯</button>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalSkills;