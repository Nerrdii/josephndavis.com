import React from 'react';

import Layout from '../components/layout';
import socialLinks from '../config/social';

const IndexPage = () => (
  <Layout>
    <div className="section landing has-text-light">
      <div className="landing-text">
        <h1 className="is-size-1 has-text-primary">Joseph Davis</h1>
        <h2 className="is-size-4">Software Engineer</h2>
        <div className="icons">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
          >
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
    </div>
  </Layout>
);

export default IndexPage;
