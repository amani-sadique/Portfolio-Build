const testimonials = [
  {
    initials: 'GM',
    name: 'Grant McCabe',
    role: 'CEO, Glory League',
    quote:
      'During her time with us, Amani demonstrated strong technical capability and was able to understand our platform and systems quickly. Amani was easy to work with and contributed positively to the team. She was cooperative, dependable, and willing to assist where needed.',
  },
  {
    initials: 'KC',
    name: 'Kim Choe',
    role: 'Digital News Editor, Newshub',
    quote:
      'Amani showed a commendable willingness to learn when she interned at Newshub. She asked thoughtful questions, was responsive to feedback and pitched solid story ideas. She is able to write articles that deliver key information accurately whilst showing creativity and individual style.',
  },
  {
    initials: 'PS',
    name: 'Phoebe Suo',
    role: 'Full Stack Dev, Mission Ready',
    quote:
      "One thing that stood out to me was Amani's ability to combine technical skills with thoughtful design. Her coding projects were not only functional, but also visually polished and user-friendly, showing strong attention to detail and creativity. I would highly recommend her to any team or organisation.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section testimonials">
      <div className="capabilities__pattern" aria-hidden="true" />
      <div className="reveal container">
        <div className="testimonials__header">
          <div>
            <span className="eyebrow eyebrow--on-accent">(04) Voices</span>
            <h2 className="heading-lg on-accent">
              What clients and peers <span className="italic">say.</span>
            </h2>
          </div>
          <p className="capabilities__intro">
            Referrals from teams I've interned with, collaborated alongside,
            and shipped work with.
          </p>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((t) => (
            <figure key={t.name} className="testimonial-card">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="testimonial-card__quote-icon" aria-hidden="true">
                <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
              </svg>
              <blockquote className="testimonial-card__quote">"{t.quote}"</blockquote>
              <figcaption className="testimonial-card__caption">
                <div className="testimonial-card__avatar">{t.initials}</div>
                <div>
                  <div className="testimonial-card__name">{t.name}</div>
                  <div className="testimonial-card__role">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
