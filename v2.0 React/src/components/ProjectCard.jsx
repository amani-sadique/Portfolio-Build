export default function ProjectCard({ project, onOpen, visible }) {
  return (
    <button
      type="button"
      className="project-card"
      style={{ display: visible ? undefined : 'none' }}
      onClick={onOpen}
    >
      <div className="project-card__image-wrap">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="project-card__image"
          />
        ) : (
          <span className="project-card__placeholder">
            Add project screenshot or cover image
          </span>
        )}
      </div>
      <div className="project-card__body">
        <div className="project-card__text">
          <div className="project-card__meta-row">
            <span className="tag">{project.category}</span>
            <span className="project-card__meta">
              {project.type === 'ux'
                ? `${project.client} · ${project.duration}`
                : `${project.role} · ${project.duration}`}
            </span>
          </div>
          <h3 className="project-card__title">{project.title}</h3>
          <p className="project-card__summary">{project.summary}</p>
        </div>
        <div className="project-card__arrow">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M7 7h10v10" />
            <path d="M7 17 17 7" />
          </svg>
        </div>
      </div>
    </button>
  );
}
