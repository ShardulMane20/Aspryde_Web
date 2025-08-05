// src/components/ProjectCard.jsx

import React from 'react';
import './ProjectCard.css'; // Optional: only if you want separate card styling

const ProjectCard = ({ project, onClick }) => {
  return (
    <div className="project-card" onClick={() => onClick(project)}>
      <img src={project.image} alt={project.title} className="project-image" />
      <div className="project-info">
        <h3>{project.title}</h3>
        <p className="project-summary">{project.summary}</p>
        <div className="tech-stack">
          {project.techStack.map((tech, index) => (
            <span key={index} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
