import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import CloseIcon from '@mui/icons-material/Close';

export default function ProjectCard({ project, sizeClass }) {
  const [expanded, setExpanded] = useState(false);

  const openModal = (e) => {
    e.stopPropagation();
    setExpanded(true);
  };

  const closeModal = (e) => {
    e.stopPropagation();
    setExpanded(false);
  };

  const modal = expanded
    ? ReactDOM.createPortal(
        <div className="project-modal-overlay" onClick={closeModal}>
          <div
            className="project-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              className="project-modal-close"
              onClick={closeModal}
              aria-label="Close"
            >
              <CloseIcon sx={{ fontSize: 24 }} />
            </button>

            <h2 className="project-modal-title">{project.title}</h2>
            <p className="project-modal-tech">{project.tech}</p>

            <ul className="project-modal-highlights">
              {project.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="projectGithubLink"
                style={{ marginTop: '20px', display: 'inline-block' }}
                onClick={(e) => e.stopPropagation()}
              >
                View on GitHub →
              </a>
            )}
          </div>
        </div>,
        document.body
      )
    : null;

  return (
    <>
      {/* Card (normal view) */}
      <div
        className={`projectBillboardFixed ${sizeClass} project-card-clickable`}
        onClick={openModal}
        title="Click to expand"
      >
        <h3 className="projectBillboardTitle">{project.title}</h3>
        <p className="projectBillboardTech">{project.tech}</p>
        <ul className="projectBillboardHighlights">
          {project.highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="projectGithubLink"
            onClick={(e) => e.stopPropagation()}
          >
            View on GitHub →
          </a>
        )}
        <span className="project-expand-hint">🔍 Tap to expand</span>
      </div>

      {/* Portal-based modal rendered directly on document.body */}
      {modal}
    </>
  );
}
