// src/components/ProjectModal.jsx
import React, { useState, useEffect, useRef, useCallback } from 'react';
import './ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  // Memoize project images to prevent unnecessary recalculations
  const projectImages = React.useMemo(() => {
    if (!project) return [];
    
    return project.images || [
      {
        src: project.image,
        caption: "Main Interface",
        type: "screenshot"
      },
      {
        src: project.image,
        caption: "Dashboard View", 
        type: "demo"
      },
      {
        src: project.image,
        caption: "Mobile Responsive",
        type: "mobile"
      },
      {
        src: project.image,
        caption: "Architecture Diagram",
        type: "architecture"
      }
    ];
  }, [project]);

  // Enhanced close button handlers for mobile support
  const handleClose = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    onClose();
  }, [onClose]);

  const handleTouchStart = useCallback((e) => {
    e.stopPropagation();
  }, []);

  const handleTouchEnd = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    onClose();
  }, [onClose]);

  // Smooth transition handler
  const handleTransition = useCallback((newIndex) => {
    if (isTransitioning || newIndex === currentImageIndex) return;
    
    setIsTransitioning(true);
    setCurrentImageIndex(newIndex);
    
    // Clear existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    // Reset transition state after animation completes
    timeoutRef.current = setTimeout(() => {
      setIsTransitioning(false);
    }, 350); // Slightly longer than CSS transition
  }, [currentImageIndex, isTransitioning]);

  const nextImage = useCallback(() => {
    if (projectImages.length <= 1) return;
    const newIndex = (currentImageIndex + 1) % projectImages.length;
    handleTransition(newIndex);
  }, [currentImageIndex, projectImages.length, handleTransition]);

  const prevImage = useCallback(() => {
    if (projectImages.length <= 1) return;
    const newIndex = (currentImageIndex - 1 + projectImages.length) % projectImages.length;
    handleTransition(newIndex);
  }, [currentImageIndex, projectImages.length, handleTransition]);

  const goToImage = useCallback((index) => {
    if (projectImages.length <= 1) return;
    handleTransition(index);
  }, [projectImages.length, handleTransition]);

  // Auto-advance carousel with proper cleanup
  useEffect(() => {
    if (!project || projectImages.length <= 1 || isTransitioning) return;

    intervalRef.current = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % projectImages.length);
    }, 4500); // Slightly longer for better UX

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [project, projectImages.length, isTransitioning]);

  // Keyboard navigation with debouncing
  useEffect(() => {
    if (!project) return;
    
    let keydownTimeout = null;
    
    const handleKeyDown = (e) => {
      // Debounce rapid keypresses
      if (keydownTimeout) return;
      
      keydownTimeout = setTimeout(() => {
        keydownTimeout = null;
      }, 100);

      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          prevImage();
          break;
        case 'ArrowRight':
          e.preventDefault();
          nextImage();
          break;
        case 'Escape':
          e.preventDefault();
          onClose();
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown, { passive: false });
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      if (keydownTimeout) {
        clearTimeout(keydownTimeout);
      }
    };
  }, [prevImage, nextImage, onClose, project]);

  // Reset state when project changes
  useEffect(() => {
    setCurrentImageIndex(0);
    setIsTransitioning(false);
    
    // Clear any existing timeouts/intervals
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }, [project]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button 
          className="modal-close" 
          onClick={handleClose}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          aria-label="Close modal"
          type="button"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ pointerEvents: 'none' }}>
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Project Header */}
        <div className="modal-header">
          <h2 className="modal-title">{project.title}</h2>
          <p className="modal-summary">{project.summary}</p>
        </div>

        {/* Image Carousel Section */}
        <div className="carousel-section">
          <div className="carousel-container">
            <div className="carousel-wrapper">
              <div 
                className="carousel-track"
                style={{
                  transform: `translate3d(-${currentImageIndex * 100}%, 0, 0)`,
                }}
              >
                {projectImages.map((image, index) => (
                  <div key={index} className="carousel-slide">
                    <div className="image-container">
                      <img 
                        src={image.src} 
                        alt={`${project.title} - ${image.caption}`}
                        className="carousel-image"
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                      <div className="image-overlay">
                        <div className="image-type-badge">{image.type}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            {projectImages.length > 1 && (
              <>
                <button 
                  className="carousel-nav carousel-nav-prev" 
                  onClick={prevImage}
                  disabled={isTransitioning}
                  aria-label="Previous image"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button 
                  className="carousel-nav carousel-nav-next" 
                  onClick={nextImage}
                  disabled={isTransitioning}
                  aria-label="Next image"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </>
            )}

            {/* Image Caption */}
            <div className="image-caption">
              <span className="caption-text">{projectImages[currentImageIndex]?.caption}</span>
              <span className="caption-counter">{currentImageIndex + 1} / {projectImages.length}</span>
            </div>
          </div>

          {/* Thumbnail Navigation */}
          {projectImages.length > 1 && (
            <div className="thumbnail-nav">
              {projectImages.map((image, index) => (
                <button
                  key={index}
                  className={`thumbnail-btn ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => goToImage(index)}
                  disabled={isTransitioning}
                  aria-label={`Go to image ${index + 1}`}
                >
                  <img src={image.src} alt={`Thumbnail ${index + 1}`} loading="lazy" />
                  <div className="thumbnail-overlay"></div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Project Details */}
        <div className="modal-body">
          <div className="description-section">
            <h3 className="section-title">Project Overview</h3>
            <p className="modal-description">{project.description}</p>
          </div>

          {/* Features Section */}
          {project.features && project.features.length > 0 && (
            <div className="features-section">
              <h3 className="section-title">Key Features</h3>
              <div className="features-grid">
                {project.features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <span className="feature-icon">✨</span>
                    <span className="feature-text">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="tech-section">
            <h3 className="section-title">Technologies Used</h3>
            <div className="modal-tech-stack">
              {project.techStack.map((tech, index) => (
                <span key={index} className="tech-badge">
                  <span className="tech-icon"></span>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;