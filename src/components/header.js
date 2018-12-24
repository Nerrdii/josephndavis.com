import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "logo_transparent.png" }) {
          childImageSharp {
            fixed(width: 60, height: 60) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <header>
        <nav
          className="navbar has-background-dark"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
            <Link to="/">
              <Img fixed={data.file.childImageSharp.fixed} />
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

          <div id="mainNavbar" className="navbar-menu has-background-dark">
            <div className="navbar-end">
              <div className="navbar-item">
                <Link to="/" className="navbar-item has-text-light">
                  Home
                </Link>
                <Link to="/about" className="navbar-item has-text-light">
                  About
                </Link>
                <Link to="/portfolio" className="navbar-item has-text-light">
                  Portfolio
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    )}
  />
);

export default Header;
