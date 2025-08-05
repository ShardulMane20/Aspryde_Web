// src/components/ProjectModal.jsx

import React from 'react';
import './ProjectModal.css'; // Optional: if you separate modal styles

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>

        <img src={project.image} alt={project.title} className="modal-image" />

        <h2 className="modal-title">{project.title}</h2>
        <p className="modal-description">{project.description}</p>

        <div className="modal-tech-stack">
          {project.techStack.map((tech, index) => (
            <span key={index} className="tech-badge">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
