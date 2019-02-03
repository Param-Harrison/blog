import React from 'react';
import { Link } from 'gatsby';

import { rhythm, scale } from '../utils/typography';

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    let header;

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.2),
            marginBottom: rhythm(1.5),
            marginTop: 0,
            color: `#950451`,
            fontFamily: `Pacifico, handwriting`,
            fontWeight: `normal`,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
              backgroundImage: `none`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      );
    } else {
      header = (
        <h2
          style={{
            marginTop: 0,
            marginBottom: 0,
            color: `#950451`,
            fontFamily: `Pacifico, handwriting`,
            fontWeight: `normal`,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
              backgroundImage: `none`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h2>
      );
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {header}
        {children}
      </div>
    );
  }
}

export default Layout;
