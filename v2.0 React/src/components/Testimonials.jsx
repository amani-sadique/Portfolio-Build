const testimonials = [
  {
      initials: 'VB',
    name: 'Vatthana Boulom',
    role: 'Full Stack Engineer, Seen Ventures',
    quote:
      'I worked alongside Amani during her internship at Seen Ventures, where she served as UX/UI Designer. Amani showed a solid eye for design and put real care into her UI work. More notably, she made good progress over the course of the internship, she was open to feedback, applied it, and showed initiative by exploring front-end development alongside her design work. Her foundation and genuine eagerness to learn really stood out. She was a pleasure to work with and brought a great attitude to the team every day. I\'d happily recommend her as a promising designer, well worth investing in.',
  },
  {
    initials: 'PS',
    name: 'Phoebe Su',
    role: 'Full Stack Developer, Mission Ready HQ',
    quote:
      'I had the pleasure of training Amani during her time at Mission Ready, and she consistently demonstrated a proactive attitude, strong problem-solving skills, and a genuine willingness to learn. Amani is highly engaged in team environments, communicates effectively, and shows great initiative when taking on challenges. One thing that especially stood out to me was her ability to combine technical skills with thoughtful design. Her coding projects were not only functional, but also visually polished and user-friendly, showing strong attention to detail and creativity. Amani is a smart, motivated, and dependable individual with a lot of potential in the tech industry. I\'m confident she will continue to grow and succeed in her future career, and I would highly recommend her to any team or organisation',
  },
  { initials: 'AY',
    name: 'Anastasiya Yeuseyeva',
    role: 'UX UI Designer, Seen Ventures',
    quote:
      'I had such a great experience working with Amani as our UX designer on an e-commerce project. I was really impressed by how consistently and effectively she did her work. She mastered every aspect of the user experience, from research and information architecture to the full Figma workflows. She kept exploring new tools and approaches, always ready to adapt and refine the visual direction to meet the project\'s needs. Her contributions truly elevated the visual design, and she\'s a designer who always gets things done with dedication. I highly recommend her professionalism and personal qualities and look forward to collaborating with her again in the future.',
    
  },

];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section testimonials">
      <div className="capabilities__pattern" aria-hidden="true" />
      <div className="reveal container">
        <div className="testimonials__header">
          <div>
            <span className="eyebrow eyebrow--on-accent">(04) Testimonials</span>
            <h2 className="heading-lg">
              What clients and peers <span className="italic on-accent">say.</span>
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
