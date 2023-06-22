import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';

class BlogList extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    const { currentPage, numPages } = this.props.pageContext;
    const isFirst = currentPage === 1;
    const isLast = currentPage === numPages;
    const prevPage =
      currentPage - 1 === 1 ? '/blog' : '/blog/' + (currentPage - 1).toString();
    const nextPage = '/blog/' + (currentPage + 1).toString();

    const nextPrevButtons = (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '0.75rem'
        }}
      >
        <div>
          {!isFirst && (
            <Link to={prevPage} className="button" rel="prev">
              ← Previous Page
            </Link>
          )}
        </div>
        <div>
          {!isLast && (
            <Link to={nextPage} className="button" rel="next">
              Next Page →
            </Link>
          )}
        </div>
      </div>
    );

    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1 className="is-size-1 has-text-light">
                {isFirst
                  ? 'Latest Blog Posts'
                  : `Blog Posts - Page ${currentPage}`}
              </h1>
              {nextPrevButtons}
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
              {nextPrevButtons}
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export default BlogList;

export const pageQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            description
            date(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  }
`;

export { Head } from '../components/Head';
