import { useState } from 'react';

const links = [
  { href: '#work', label: 'Work' },
  { href: '#services', label: 'Capabilities' },
  { href: '#about', label: 'About' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="nav">
        <div className="nav__inner">
          <a href="#home" className="nav__logo-link">
            <img
              src="https://amanisadique.tfwgsite.com/__l5e/assets-v1/d8df62a8-8cb7-45e9-beea-a74979adedbc/logo-nav.png"
              alt="Amani Sadique"
              className="nav__logo"
            />
          </a>
          <div className="nav__links">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="nav__link">
                {link.label}
              </a>
            ))}
          </div>
          <button
            className="nav__menu-btn"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 5h16" />
              <path d="M4 12h16" />
              <path d="M4 19h16" />
            </svg>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`}>
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="mobile-menu__link"
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
}
