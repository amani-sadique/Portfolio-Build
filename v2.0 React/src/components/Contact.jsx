import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm('mzedeakd');

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
            Open to graduate and entry-level opportunities across
            UX/UI design, front-end development, QA, and digital accessibility.
          </p>
          <div className="contact__status-block">
            <div className="contact__status-label">Currently</div>
            <div className="contact__status-row">
              <span className="status-dot" />
              Available for opportunities
            </div>
          </div>
        </div>

        {state.succeeded ? (
          <div className="contact__form">
            <p className="contact__status-msg">
              Thanks for reaching out — your message has been sent. I'll get back to you soon.
            </p>
          </div>
        ) : (
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__form-row">
              <label className="field">
                <span className="field__label">Name</span>
                <input required type="text" autoComplete="name" name="name" placeholder="Your name" />
              </label>
              <label className="field">
                <span className="field__label">Email</span>
                <input required type="email" autoComplete="email" name="email" placeholder="you@company.com" />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
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
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </label>
            <button type="submit" className="btn btn--primary btn--full" disabled={state.submitting}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
                <path d="m21.854 2.147-10.94 10.939" />
              </svg>
              {state.submitting ? 'Sending...' : 'Send request'}
            </button>
            <ValidationError errors={state.errors} />
          </form>
        )}
      </div>
    </section>
  );
}
