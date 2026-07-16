import { useEffect } from 'react';

export default function ProjectModal({ projects, index, onClose, onNavigate }) {
  const isOpen = index !== null;
  const project = isOpen ? projects[index] : null;

  useEffect(() => {
    if (!isOpen) return undefined;
    document.body.style.overflow = 'hidden';

    function handleKeydown(e) {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate((index + 1) % projects.length);
      if (e.key === 'ArrowLeft') onNavigate((index - 1 + projects.length) % projects.length);
    }

    document.addEventListener('keydown', handleKeydown);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [isOpen, index, projects.length, onClose, onNavigate]);

  if (!isOpen) return null;

  const goPrev = () => onNavigate((index - 1 + projects.length) % projects.length);
  const goNext = () => onNavigate((index + 1) % projects.length);

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal__backdrop" onClick={onClose} />

      <button className="modal__nav-btn modal__nav-btn--prev" aria-label="Previous project" onClick={goPrev}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
      </button>
      <button className="modal__nav-btn modal__nav-btn--next" aria-label="Next project" onClick={goNext}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
      </button>

      <div className="modal__panel">
        <div className="modal__top-row">
          <div className="modal__top-left">
            <span className="tag">{project.category}</span>
            <span className="modal__index">{index + 1} / {projects.length}</span>
          </div>
          <button className="modal__close" aria-label="Close" onClick={onClose}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        <h3 id="modal-title" className="modal__title">{project.title}</h3>

        {project.type === 'ux' ? (
          <div className="modal__meta-grid">
            <MetaField label="Client" value={project.client} />
            <MetaField label="Industry" value={project.industry} />
            <MetaField label="Duration" value={project.duration} />
            <MetaField label="Read Time" value={project.readTime} />
          </div>
        ) : (
          <div className="modal__meta-grid">
            <MetaField label="Role" value={project.role} />
            <MetaField label="Stack" value={project.stack} />
            <MetaField label="Duration" value={project.duration} />
            <MetaField label="Read Time" value={project.readTime} />
          </div>
        )}

        <div className="modal__cover">
          {project.image ? (
            <img src={project.image} alt={project.title} className="modal__cover-image" />
          ) : (
            <span className="modal__cover-label">{project.title} — replace with your cover image</span>
          )}
        </div>

        <div className="modal__nav-mobile">
          <button className="modal__nav-mobile-btn" onClick={goPrev}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
            Prev
          </button>
          <button className="modal__nav-mobile-btn" onClick={goNext}>
            Next
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
          </button>
        </div>

        <div className="modal__body">
          {project.type === 'ux' ? (
            <>
              <BodySection heading="The Problem" text={project.problem} />
              <BodySection heading="Research &amp; Discovery" text={project.research} />
              <BodySection heading="Process" text={project.process} />
              <BodySection heading="Final Solution" text={project.solution} />
              <BodySection heading="Outcome &amp; Impact" text={project.outcome} />
              <div className="modal__links">
                <a href={project.prototypeLink} target="_blank" rel="noreferrer" className="modal__link">
                  View prototype →
                </a>
              </div>
            </>
          ) : (
            <>
              <BodySection heading="Overview" text={project.overview} />
              <BodySection heading="Architecture &amp; Stack" text={project.architecture} />
              <div>
                <h4 className="modal__section-heading">Key Features</h4>
                <ul className="modal__feature-list">
                  {project.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
              <BodySection heading="Technical Challenge" text={project.challenge} />
              <BodySection heading="Outcome" text={project.outcome} />
              <div className="modal__links">
                <a href={project.liveLink} target="_blank" rel="noreferrer" className="modal__link">
                  Live demo →
                </a>
                <a href={project.repoLink} target="_blank" rel="noreferrer" className="modal__link">
                  View code →
                </a>
              </div>
            </>
          )}

          {project.pairIndex !== undefined && (
            <div className="modal__pair-link-row">
              <button
                type="button"
                className="modal__link"
                onClick={() => onNavigate(project.pairIndex)}
              >
                {project.pairLabel} →
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function MetaField({ label, value }) {
  return (
    <div className="modal__meta-field">
      <div className="modal__meta-label">{label}</div>
      <div className="modal__meta-value">{value}</div>
    </div>
  );
}

function BodySection({ heading, text }) {
  return (
    <div>
      <h4
        className="modal__section-heading"
        dangerouslySetInnerHTML={{ __html: heading }}
      />
      <p>{text}</p>
    </div>
  );
}
