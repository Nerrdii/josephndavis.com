import React from 'react';
import { graphql, Link } from 'gatsby';
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
                    <Link to={post.fields.slug} className="title is-4">
                      {post.frontmatter.title}
                    </Link>
                    <p className="is-6">{post.frontmatter.description}</p>
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
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM Do, YYYY")
            description
          }
        }
      }
    }
  }
`;

export default BlogPage;
