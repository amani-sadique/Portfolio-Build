const tags = ['Journalism', 'UX Research', 'Full-Stack Dev', 'Design Systems', 'Accessibility'];

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="reveal container about__grid">
        <div className="about__portrait-col">
          <div className="about__portrait-wrap">
            <img
              src="https://amanisadique.tfwgsite.com/__l5e/assets-v1/4e52dc02-b64e-429b-a6db-4b60e1d286fc/amani-portrait.png"
              alt="Amani Sadique"
              width="1000"
              height="1250"
              loading="lazy"
              className="about__portrait"
            />
            <div className="about__portrait-glow" aria-hidden="true" />
          </div>
        </div>

        <div className="about__text-col">
          <span className="eyebrow">(03) About</span>
          <h2 className="heading-lg">
            Multidisciplinary design,{' '}
            <span className="italic accent-vibrant">from Aotearoa to the world.</span>
          </h2>
          <div className="about__paragraphs">
            <p>
              I'm a UX/UI designer with practical software development
              experience, coming from a multidisciplinary background in
              journalism, user support, web development, and design.
            </p>
            <p>
              That mix shapes how I work: I bridge communication, design, and
              technology to build digital experiences that are accessible,
              user-centred, and easy to understand and implement, not just
              easy to look at.
            </p>
            <p>
              Currently based in New Zealand and open to graduate,
              entry-level, and career-transition opportunities. Migrating to
              Melbourne soon.
            </p>
          </div>

          <div className="about__tags">
            {tags.map((tag) => (
              <span key={tag} className="pill">
                {tag}
              </span>
            ))}
          </div>

          <div className="about__links">
            <a
              href="https://www.linkedin.com/in/amani-sadique"
              target="_blank"
              rel="noreferrer"
              className="link-pill"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              LinkedIn
            </a>
            <a
              href="https://github.com/amani-sadique"
              target="_blank"
              rel="noreferrer"
              className="link-pill"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
