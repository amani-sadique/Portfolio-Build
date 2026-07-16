export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__scrim" />
      <div className="footer__inner container">
        <div className="footer__grid">
          <div className="footer__brand">
            <a href="#home" className="footer__logo-link">
              <img
                src="https://amanisadique.tfwgsite.com/__l5e/assets-v1/dba39a70-a2f0-4c13-b297-94530981bf83/logo-removebg-preview.png"
                alt="Amani Sadique"
                className="footer__logo"
              />
            </a>
            <p className="footer__tagline">
              UX/UI designer and front-end developer, based in Aotearoa,
              designing for a global audience.
            </p>
          </div>

          <div className="footer__col">
            <div className="footer__col-label">Explore</div>
            <a href="#about" className="footer__link">About</a>
            <a href="#work" className="footer__link">Work</a>
            <a href="#testimonials" className="footer__link">Voices</a>
            <a href="#contact" className="footer__link">Contact</a>
          </div>

          <div className="footer__col">
            <div className="footer__col-label">Elsewhere</div>
            <a href="https://www.linkedin.com/in/amani-sadique" target="_blank" rel="noreferrer" className="footer__link footer__link--icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              LinkedIn
            </a>
            <a href="https://github.com/amani-sadique" target="_blank" rel="noreferrer" className="footer__link footer__link--icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              GitHub
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__legal">© 2026 Amani Sadique</p>
          <p className="footer__legal">
            Built by{' '}
            <a href="https://thefreewebsiteguys.com/" target="_blank" rel="noreferrer" className="footer__builder-link">
              The Free Website Guys
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
