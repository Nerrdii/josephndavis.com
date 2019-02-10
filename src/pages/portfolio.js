import React from 'react';

import Layout from '../components/layout';

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
            <div key={index} className="column is-one-third">
              <div className="card">
                <header className="card-header">
                  <div className="card-header-title is-size-4">
                    {project.name}
                  </div>
                </header>
                <div className="card-content">
                  <div className="content">
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
        {/* <div className="column">
          <div className="card">
            <header className="card-header">
              <div className="card-header-title">Weather App</div>
            </header>
            <div className="card-content">
              <div className="content">Shows weather for current location</div>
            </div>
            <footer className="card-footer">
              <a href="#" className="card-footer-item">
                Visit
              </a>
              <a href="#" className="card-footer-item">
                GitHub
              </a>
            </footer>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <header className="card-header">
              <div className="card-header-title">Weather App</div>
            </header>
            <div className="card-content">
              <div className="content">Shows weather for current location</div>
            </div>
            <footer className="card-footer">
              <a href="#" className="card-footer-item">
                Visit
              </a>
              <a href="#" className="card-footer-item">
                GitHub
              </a>
            </footer>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <header className="card-header">
              <div className="card-header-title">Weather App</div>
            </header>
            <div className="card-content">
              <div className="content">Shows weather for current location</div>
            </div>
            <footer className="card-footer">
              <a href="#" className="card-footer-item">
                Visit
              </a>
              <a href="#" className="card-footer-item">
                GitHub
              </a>
            </footer>
          </div>
        </div> */}
      </div>
    </section>
  </Layout>
);

export default PortfolioPage;
