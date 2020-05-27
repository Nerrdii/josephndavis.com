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
        <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github-square fa-2x" />
        </a>
        <a
          href={socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin fa-2x" />
        </a>
        <a href={socialLinks.email}>
          <i className="fas fa-envelope-square fa-2x" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
