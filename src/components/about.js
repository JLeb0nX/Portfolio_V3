// About.jsx
import React, { useState } from 'react';
import '../styles/about.css';
import ProfessionalSkills from './professionalskills';
import CV from '../assets/PDF/CV_LEBON_JOHAN.pdf'; // Import the CV file


const About = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const photos = [
    {
      src: require('../assets/images/IUTJPO2024-125.jpg'),
      caption: "IUT JPO 2024 - Journée Portes Ouvertes"
    },
    {
      src: require('../assets/images/IUTJPO2024-126.jpg'),
      caption: "IUT JPO 2024 - Journée Portes Ouvertes"
    },
    {
      src: require('../assets/images/IMG_2917.jpg'),
      caption: "Réalisation d'un TP 'Mise en place de la TNT'",
    },
  ];

  const nextPhoto = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevPhoto = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  return (
    <div className="about-background">
      <div className="aurora-container">
        <div className="aurora"></div>
        <div className="aurora-2"></div>
        <div className="aurora-3"></div>
      </div>
      <div className="about-container">
      <div className="profile-section">
        <div className="profile-photo-container">
          <div className="profile-frame">
            <div className="frame-corner top-left"></div>
            <div className="frame-corner top-right"></div>
            <div className="frame-corner bottom-left"></div>
            <div className="frame-corner bottom-right"></div>
            <div className="photo-carousel">
              <button className="carousel-btn prev" onClick={prevPhoto}>❮</button>
              <img 
                src={photos[currentPhotoIndex].src} 
                alt={`Photo ${currentPhotoIndex + 1}`} 
                className="profile-photo"
              />
              <button className="carousel-btn next" onClick={nextPhoto}>❯</button>
              <div className="photo-caption">
                {photos[currentPhotoIndex].caption}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="description-section">
        <div className="description-content">
          <h2>À Propos de Moi</h2>
          <p>Je m'appelle Lebon Johan, j'ai 19 ans et je suis originaire de l'île de la Réunion. Titulaire d'un Baccalauréat technologique STI2D et du permis B.</p>
          <p>Je poursuis actuellement mes études en 2ème année de Bachelor Universitaire de Technologie (BUT) Réseaux et Télécommunication à l'IUT de la Réunion.</p>
          <p>En dehors de mon parcours, j'aime aussi : <p>- Faire du Sport 🏃‍➡️</p> <p>- Jouer aux jeux-vidéos 🎮</p></p>
          <h2>Mes compétences</h2>
          <div className="skills">
            <div className="skill-tag">Esprit d’analyse et de résolution deproblèmes</div>
            <div className="skill-tag">Réactivité et capacité d’adaptation</div>
            <div className="skill-tag">Gestion du stress</div>
            <div className="skill-tag">Travail en équipe et autonomie</div>
            <div className="skill-tag">Rigueur et organisation</div>
            <div className="skill-tag">Sens de l'écoute et de lacommunication</div>
          </div>
          <ProfessionalSkills />
          <div className="cv-button-container">
            <a href= {CV} download className="cv-button">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Télécharger mon CV
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;