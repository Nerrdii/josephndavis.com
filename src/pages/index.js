import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';

const IndexPage = ({ data }) => (
  <Layout>
    <div className="landing has-text-light">
      <div className="landing-photo">
        <Img fixed={data.file.childImageSharp.fixed} />
      </div>
      <div className="landing-text">
        <h1>Joseph Davis</h1>
        <h2>Software Engineer</h2>
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
