import { useState } from 'react';
import ProjectCard from './ProjectCard.jsx';

const filters = [
  { value: 'all', label: 'All' },
  { value: 'ux', label: 'UX & UI' },
  { value: 'fullstack', label: 'Full-Stack' },
];

export default function Work({ projects, onOpenProject }) {
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <section id="work" className="section work">
      <div className="reveal container">
        <div className="work__header">
          <div>
            <span className="eyebrow">(01) Selected work</span>
            <h2 className="heading-lg">
              Project <span className="italic accent-vibrant">archives.</span>
            </h2>
          </div>
          <div className="work__filters">
            {filters.map((f) => (
              <button
                key={f.value}
                type="button"
                className={`filter-btn ${activeFilter === f.value ? 'filter-btn--active' : ''}`}
                onClick={() => setActiveFilter(f.value)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="work__grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              visible={activeFilter === 'all' || project.type === activeFilter}
              onOpen={() => onOpenProject(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
