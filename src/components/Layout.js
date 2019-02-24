import React from 'react';
import { Link } from 'gatsby';

import { rhythm, scale } from '../utils/typography';

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;

    const linkStyle = {
      boxShadow: `none`,
      textDecoration: `none`,
      color: `inherit`,
      backgroundImage: `none`,
    };
    let HeaderTag = 'h1';
    let headerStyle = {
      ...scale(0.7),
      marginTop: 0,
      marginBottom: rhythm(0),
      color: `#950451`,
    };

    if (location.pathname === rootPath) {
      headerStyle.marginBottom = rhythm(1.5);
    } else {
      HeaderTag = 'h2';
    }
    const header = (
      <HeaderTag
        style={{
          marginBottom: rhythm(1.5),
          ...headerStyle,
        }}
      >
        <Link style={linkStyle} to={`/`}>
          {title}
        </Link>
      </HeaderTag>
    );

    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(26),
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
