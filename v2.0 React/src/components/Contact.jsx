import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    // No backend wired up yet — swap this for Formspree/EmailJS/your own API.
    setStatus(
      "Thanks — this form isn't connected to an email service yet. Wire it up to Formspree, EmailJS, or your own API endpoint."
    );
  }

  return (
    <section id="contact" className="section contact">
      <div className="reveal container contact__grid">
        <div className="contact__intro">
          <span className="eyebrow">(05) Get in touch</span>
          <h2 className="heading-xl">
            Let's build something{' '}
            <span className="italic accent-vibrant">meaningful.</span>
          </h2>
          <p className="contact__lede">
            Open to graduate, entry-level, and career-transition roles across
            UX/UI design, front-end development, QA, and digital product.
            Send a note and I'll reply.
          </p>
          <div className="contact__status-block">
            <div className="contact__status-label">Currently</div>
            <div className="contact__status-row">
              <span className="status-dot" />
              Available for opportunities
            </div>
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__form-row">
            <label className="field">
              <span className="field__label">Name</span>
              <input required type="text" autoComplete="name" name="name" placeholder="Your name" />
            </label>
            <label className="field">
              <span className="field__label">Email</span>
              <input required type="email" autoComplete="email" name="email" placeholder="you@company.com" />
            </label>
          </div>
          <label className="field">
            <span className="field__label">Subject</span>
            <input type="text" name="subject" placeholder="Role, project, or introduction" />
          </label>
          <label className="field">
            <span className="field__label">Message</span>
            <textarea
              required
              name="message"
              rows={5}
              placeholder="Tell me a little about what you're working on."
            />
          </label>
          <button type="submit" className="btn btn--primary btn--full">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
              <path d="m21.854 2.147-10.94 10.939" />
            </svg>
            Send request
          </button>
          {status && <p className="contact__status-msg">{status}</p>}
        </form>
      </div>
    </section>
  );
}
