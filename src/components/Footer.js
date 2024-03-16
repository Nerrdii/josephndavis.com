import React from 'react';
import socialLinks from '../config/social';

const Footer = () => (
  <footer className="footer has-background-dark">
    <div
      className="content has-text-centered has-text-light is-flex"
      style={{
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <span>Joseph Davis &copy; {new Date().getFullYear()}</span>
      <div className="icons">
        <a
          href={socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="github-link"
        >
          <i className="fab fa-github-square fa-2x" />
        </a>
        <a
          href={socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="linkedin-link"
        >
          <i className="fab fa-linkedin fa-2x" />
        </a>
        <a href={`mailto:${socialLinks.email}`} aria-label="email-link">
          <i className="fas fa-envelope-square fa-2x" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
