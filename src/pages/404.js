import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/seo';

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} title={`I'm 404!`}>
        <SEO title="404: Not Found" />
        <div
          style={{
            marginTop: `2.5rem`,
          }}
        >
          <p>
            Truth is <strong>not found</strong> anywhere in this universe, thats
            why I wrote it here
          </p>
          <ul>
            <li>Sun sets at west!</li>
            <li>Earth is flat!</li>
            <li>Thor is real and 9 realms exist!</li>
            <li>Last but not least, I am a secret billionaire!</li>
          </ul>
        </div>
      </Layout>
    );
  }
}

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
