// Projects.jsx
import React from 'react';
import '../styles/projects.css'; // Import the CSS file for styling
import portfolio from '../assets/images/Portfolio.png'; // Import the portfolio image
import réseau from '../assets/images/reseau_sécurisé.png'; // Import the network image
import PDFRéseau from '../assets/PDF/Rapport_du_projet_réseau_sécurisé.pdf'; // Import the PDF report for network security
import hiddenKey from '../assets/images/hiddenkey.png'; // Import the HiddenKey image
import PDFHiddenkey from '../assets/PDF/Rapport_du_projet_application_communicante.pdf'; // Import the PDF report for HiddenKey

const Projects = () => {
  const projects = [
    {
      title: "HiddenKey",
      image: hiddenKey,
      description: "Création d'une application de gestion de mots de passe en React, en équipe.",
      github: "https://github.com/JLeb0nX/HiddenKey.git",
      pdf: PDFHiddenkey,
    },
    {
      title: "Portfolio",
      image: portfolio,
      description: "Portfolio personnel développé avec React, intégrant des animations et effets visuels modernes",
      github: "https://github.com/JLeb0nX/Portfolio_V3.git"
    },
    {
      title: "Sécurisation Réseau",
      image: réseau,
      description: "Mise en place d'une infrastructure réseau sécurisée avec GNS3, incluant firewall et VLANs",
      pdf: PDFRéseau,
    }
  ];

  return (
    <div className="projects-background">
      <div className="nebula-container">
        <div className="nebula"></div>
        <div className="nebula-2"></div>
        <div className="shooting-stars"></div>
      </div>
      <div className="projects-container">
        <h2>Mes Projets</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} className="github-link" target="_blank" rel="noopener noreferrer">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      GitHub
                    </a>
                  )}
                  {project.pdf && (
                    <a href={project.pdf} className="pdf-link" download>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      Rapport PDF
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;