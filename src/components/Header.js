import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 60)
        }
      }
    }
  `);

  return (
    <header>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/">
            <GatsbyImage
              image={data.file.childImageSharp.gatsbyImageData}
              alt="logo"
            />
          </Link>

          <label
            htmlFor="navbar-toggle-state"
            className="navbar-burger burger has-text-light"
            aria-label="menu"
            aria-expanded="false"
            data-target="mainNavbar"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </label>
        </div>

        <input type="checkbox" id="navbar-toggle-state" />

        <div id="mainNavbar" className="navbar-menu">
          <div className="navbar-end">
            <Link to="/" className="navbar-item has-text-light">
              Home
            </Link>
            <Link to="/portfolio" className="navbar-item has-text-light">
              Portfolio
            </Link>
            <Link to="/blog" className="navbar-item has-text-light">
              Blog
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
