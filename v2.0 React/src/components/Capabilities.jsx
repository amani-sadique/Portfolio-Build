const columns = [
  {
    label: '01 · Design',
    title: 'UX & UI Design',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" />
        <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" />
        <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" />
      </svg>
    ),
    items: [
      'User research & interviewing',
      'Wireframing & prototyping',
      'Information architecture',
      'Design systems',
      'WCAG accessibility',
      'Figma · Miro',
    ],
  },
  {
    label: '02 · Development',
    title: 'Front-End Engineering',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="m18 16 4-4-4-4" />
        <path d="m6 8-4 4 4 4" />
        <path d="m14.5 4-5 16" />
      </svg>
    ),
    items: [
      'HTML5, CSS3, JavaScript (ES6+)',
      'React · TypeScript',
      'REST APIs · Postman',
      'MySQL · Git workflows',
      'Component-driven UI',
      'Responsive & accessible',
    ],
  },
  {
    label: '03 · Strategy',
    title: 'Research & Content',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
      </svg>
    ),
    items: [
      'Heuristic evaluation',
      'Usability testing',
      'Competitor analysis',
      'Copywriting & editing',
      'Agile / Scrum delivery',
      'Journalistic storytelling',
    ],
  },
];

export default function Capabilities() {
  return (
    <section id="services" className="section capabilities">
      <div className="capabilities__pattern" aria-hidden="true" />
      <div className="reveal container">
        <div className="capabilities__header">
          <div>
            <span className="eyebrow eyebrow--on-accent">(02) Capabilities</span>
            <h2 className="heading-lg on-accent">
              A hybrid toolkit for the <span className="italic">whole build.</span>
            </h2>
          </div>
          <p className="capabilities__intro">
            From first user interview to final component. I move between
            research, interface, and code without dropping the thread.
          </p>
        </div>

        <div className="capabilities__grid">
          {columns.map((col) => (
            <div key={col.title} className="capabilities__col">
              <div className="capabilities__col-top">
                <span className="capabilities__col-label">{col.label}</span>
                <div className="capabilities__col-icon">{col.icon}</div>
              </div>
              <h3 className="heading-sm">{col.title}</h3>
              <ul className="capabilities__list">
                {col.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
