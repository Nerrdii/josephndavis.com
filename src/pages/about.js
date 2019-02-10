import React from 'react';

import Layout from '../components/layout';

const AboutPage = () => (
  <Layout>
    <section className="section has-text-light">
      <div className="tile is-ancestor">
        <div className="tile is-4 is-vertical is-parent">
          <div className="tile is-child">
            <div className="card">
              <div className="card-header">
                <p className="card-header-title is-size-4 has-text-primary">
                  Company
                </p>
              </div>
              <div className="card-content">
                <div className="content">DST Systems</div>
              </div>
            </div>
          </div>
          <div className="tile is-child">
            <div className="card">
              <div className="card-header">
                <p className="card-header-title is-size-4 has-text-primary">
                  School
                </p>
              </div>
              <div className="card-content">
                <div className="content">
                  <p>University of Central Missouri</p>
                  <p>Completed: Bachelor in Computer Science</p>
                  <p>In Progress: Master in Computer Information Systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tile is-4 is-parent">
          <div className="tile is-child">
            <div className="card">
              <div className="card-header">
                <p className="card-header-title is-size-4 has-text-primary">
                  Favorite Technologies
                </p>
              </div>
              <div className="card-content">
                <div className="content">
                  <p>Java</p>
                  <p>Angular</p>
                  <p>React</p>
                  <p>Node.js</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tile is-4 is-vertical is-parent">
          <div className="tile is-child">
            <div className="card">
              <div className="card-header">
                <p className="card-header-title is-size-4 has-text-primary">
                  Favorite Editor
                </p>
              </div>
              <div className="card-content">
                <div className="content">VS Code</div>
              </div>
            </div>
          </div>
          <div className="tile is-child">
            <div className="card">
              <div className="card-header">
                <p className="card-header-title is-size-4 has-text-primary">
                  Other Interests
                </p>
              </div>
              <div className="card-content">
                <div className="content">
                  <p>Running</p>
                  <p>Ultimate Frisbee</p>
                  <p>Doughnuts</p>
                  <p>Kansas City Chiefs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default AboutPage;
