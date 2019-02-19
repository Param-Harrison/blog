import React from 'react';
import { rhythm } from '../utils/typography';

class Footer extends React.Component {
  render() {
    return (
      <footer
        style={{
          marginTop: rhythm(2.5),
          paddingTop: rhythm(1),
        }}
      >
        <div style={{ float: 'right' }}>
          <a href="/rss.xml" target="_blank" rel="noopener noreferrer">
            rss
          </a>
        </div>
        <a
          href="https://mobile.twitter.com/jacknapes"
          target="_blank"
          rel="noopener noreferrer"
        >
          twitter
        </a>{' '}
        |{' '}
        <a
          href="https://github.com/Param-Harrison"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>{' '}
        |{' '}
        <a
          href="https://www.linkedin.com/in/paramanantham/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
      </footer>
    );
  }
}

export default Footer;
