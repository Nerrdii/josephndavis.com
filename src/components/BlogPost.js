import React from 'react';
import PropTypes from 'prop-types';

const BlogPostTemplate = ({ content, description, title, helmet }) => {
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

export default BlogPostTemplate;
