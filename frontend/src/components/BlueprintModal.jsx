import React, { useEffect } from 'react';

export default function BlueprintModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="blueprint-modal-overlay active" onClick={onClose}>
      <div className="blueprint-modal-dialog" onClick={(e) => e.stopPropagation()}>
        
        {/* Modal Topbar */}
        <div className="blueprint-modal-header">
          <div className="blueprint-header-info">
            <span className="blueprint-tag">
              <i className="fa-solid fa-compass-drafting text-crimson"></i> ARCHITECTURAL DOSSIER [{project.year}]
            </span>
            <h3 className="blueprint-modal-title">{project.title}</h3>
            <p className="blueprint-modal-meta">
              <strong>Client:</strong> {project.client} &nbsp;|&nbsp; 
              <strong>Location:</strong> {project.location} &nbsp;|&nbsp; 
              <strong>Lead Designer:</strong> Niyaz Samad
            </p>
          </div>
          <button 
            className="blueprint-close-btn" 
            onClick={onClose}
            aria-label="Close Blueprint Modal"
          >
            ✕
          </button>
        </div>

        {/* Modal Body: Image & Architectural Specs */}
        <div className="blueprint-modal-body">
          <div className="blueprint-img-container">
            <img 
              src={project.fullImg} 
              alt={`${project.title} - Architectural Drawing & Realization`} 
              className="blueprint-full-img"
            />
            <div className="blueprint-watermark-stamp">
              <span>AUTHENTIC CAD & REALIZED FITOUT</span>
              <small>PRINCIPAL ARCHITECT: NIYAZ SAMAD</small>
            </div>
          </div>

          <div className="blueprint-details-sidebar">
            <h4 className="sidebar-section-title">Architectural Scope & Deliverables</h4>
            <p className="sidebar-summary">{project.summary}</p>

            <div className="sidebar-spec-group">
              <h5>Technical Specifications</h5>
              <ul className="sidebar-spec-list">
                {project.specs.map((spec, i) => (
                  <li key={i}>
                    <i className="fa-solid fa-square-check text-crimson"></i> {spec}
                  </li>
                ))}
              </ul>
            </div>

            <div className="sidebar-spec-group">
              <h5>Documentation & CAD Artifact</h5>
              <div className="sidebar-cad-badge">
                <i className="fa-solid fa-file-code"></i> {project.cadDetail}
              </div>
            </div>

            <div className="sidebar-contact-card">
              <h5>Inquire About Similar Architecture</h5>
              <p>Planning a retail, sports facility, or commercial space in Kerala or the GCC?</p>
              <a 
                href={`https://wa.me/15559028811?text=${encodeURIComponent(`Hi Niyaz Samad & Alliance Team, I was inspecting the architectural case study for "${project.title}". I would like to discuss a similar commercial project.`)}`}
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-primary"
                style={{ width: '100%', textAlign: 'center', marginTop: '0.75rem' }}
              >
                <i className="fa-brands fa-whatsapp"></i> Direct Consultation
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
