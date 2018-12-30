import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import socialLinks from '../config/social';

const IndexPage = ({ data }) => (
  <Layout>
    <div className="landing has-text-light">
      <div className="landing-photo">
        <Img fixed={data.file.childImageSharp.fixed} />
      </div>
      <div className="landing-text">
        <h1 className="is-size-1 has-text-warning">Joseph Davis</h1>
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

export const query = graphql`
  query {
    file(relativePath: { eq: "profile.jpg" }) {
      childImageSharp {
        fixed(width: 250, height: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
