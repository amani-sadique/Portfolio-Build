export default function Hero() {
  return (
    <header id="home" className="hero">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__dot-grid" />
        <div className="hero__blob hero__blob--1" />
        <div className="hero__blob hero__blob--2" />
        <div className="hero__blob hero__blob--3" />
        <div className="hero__card hero__card--1">
          <div className="hero__card-bar hero__card-bar--wide" />
          <div className="hero__card-bar hero__card-bar--narrow" />
        </div>
        <div className="hero__card hero__card--2" />
        <div className="hero__card hero__card--4" />
        <div className="hero__card hero__card--3">
          <div className="hero__card-browser-bar">
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className="hero__card hero__card--5" />
        <div className="hero__blob hero__blob--5" />
        <div className="hero__blob hero__blob--6" />
        <div className="hero__blob hero__blob--4" />
        <div className="hero__scrim" />
      </div>

      <div className="hero__content">
        <span className="hero__eyebrow">
          UX & UI Design · Front-End Development · Manchester → Auckland → Melbourne
        </span>
        <h1 className="hero__title">
          Amani <span className="italic accent-vibrant">Sadique</span>
        </h1>
        <p className="hero__subtitle">
          An editor's eye for confusion. A designer's eye for clarity. I bridge journalism, design, and code to craft digital experiences that are accessible, considered, and easy to understand, not just easy to look at.
        </p>
        <div className="hero__actions">
          <a href="#work" className="btn btn--primary">
            View selected work
          </a>
          <a href="#contact" className="btn btn--outline">
            Get in touch
          </a>
        </div>
      </div>
    </header>
  );
}
