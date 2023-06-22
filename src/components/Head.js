import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

export function Head() {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <html lang="en" />
      <title>{data.site.siteMetadata.title}</title>
    </>
  );
}
