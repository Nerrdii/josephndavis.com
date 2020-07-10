import React from 'react';

import Layout from '../components/Layout';

import projects from '../config/projects';

const PortfolioPage = () => (
  <Layout>
    <section className="section">
      <div className="columns is-multiline">
        {projects.map((project, index) => {
          const link = project.link ? (
            <a
              href={project.link}
              className="card-footer-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit
            </a>
          ) : null;

          return (
            <div
              key={index}
              className="column is-half-tablet is-one-third-desktop"
            >
              <div className="card">
                <div className="card-content">
                  <div className="content">
                    <h1 className="is-size-4">{project.name}</h1>
                    <p>{project.desc}</p>
                    <p>Tech: {project.tech}</p>
                  </div>
                </div>
                <footer className="card-footer">
                  {link}
                  <a
                    href={project.repo}
                    className="card-footer-item"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </footer>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  </Layout>
);

export default PortfolioPage;
