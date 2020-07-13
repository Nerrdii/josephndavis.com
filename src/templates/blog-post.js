import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

export const BlogPostTemplate = ({ content, description, title, helmet }) => {
  return (
    <section className="section has-text-light">
      {helmet || ''}
      <div className="container content">
        <div className="columns is-centered">
          <div className="column is-two-thirds">
            <div className="card py-6">
              <div className="card-content mx-6">
                <p className="title has-text-centered">{title}</p>
                <p className="subtitle has-text-centered">{description}</p>
                <div dangerouslySetInnerHTML={{ __html: content }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        description={post.frontmatter.description}
        title={post.frontmatter.title}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`;
