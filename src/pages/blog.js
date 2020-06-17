import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const BlogPage = ({ data }) => {
  const {
    allMarkdownRemark: { edges: posts }
  } = data;
  console.log(posts);
  return (
    <Layout>
      <section className="section has-text-light">
        <h1 className="is-size-1" style={{ marginBottom: '1rem' }}>
          Blog
        </h1>
        <div className="columns is-multiline">
          {posts &&
            posts.map(({ node: post }) => (
              <div key={post.id} className="column is-6">
                <div className="card">
                  <div className="card-content">
                    <p className="title is-4" style={{ marginBottom: '2rem' }}>
                      {post.frontmatter.title}
                    </p>
                    <p className="subtitle is-6">
                      {post.frontmatter.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query BlogPageQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            description
          }
          id
        }
      }
    }
  }
`;

export default BlogPage;
