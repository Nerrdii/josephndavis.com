import React from 'react';

import Layout from '../components/Layout';
import socialLinks from '../config/social';

const IndexPage = () => (
  <Layout>
    <section className="section has-text-light">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-half">
            <h1 className="is-size-2">Hi, I'm Joseph Davis</h1>
            <br />
            <p className="is-size-4">
              I am a software engineer from Kansas City, MO. I have full-stack
              experience with Java, Angular, C#, and React. I specialize in
              front-end development, making clean and performant user interfaces
              that just work. If I'm not at my computer, I'm probably out
              running or playing Ultimate Frisbee.
            </p>
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-half">
            <div className="icons">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer">
                <i className="fab fa-github-square fa-2x" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer">
                <i className="fab fa-linkedin fa-2x" />
              </a>
              <a href={socialLinks.email}>
                <i className="fas fa-envelope-square fa-2x" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
