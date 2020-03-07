import React from 'react';
import { Link } from 'gatsby';
import { scale, rhythm } from '../utils/typography';

const Header = ({ title, rootPath, blogPath }) => {
  let header;
  if (window.location.pathname === rootPath || window.location.pathname === blogPath) {
    header = (
      <h1
        style={{
          ...scale(1.2),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={window.location.pathname === blogPath ? `/blog/` : `/`}
        >
          {title}
        </Link>
      </h1>
    );
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/blog/`}
        >
          {title}
        </Link>
      </h3>
    );
  }
  return (
    <header>
        {header}
    </header>
  );
};

export default Header;
