import React from 'react';
import { Link, graphql } from 'gatsby';

import Bio from '../components/Bio';
import SocialShare from '../components/SocialShare';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import { rhythm, scale } from '../utils/typography';

const GITHUB_USERNAME = 'paramlabs';
const GITHUB_REPO_NAME = 'LearnWithParam';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { siteUrl, social } = this.props.data.site.siteMetadata;
    const { previous, next } = this.props.pageContext;
    const slug = post.fields.slug;
    const editUrl = `https://github.com/${GITHUB_USERNAME}/${GITHUB_REPO_NAME}/edit/master/content/blog${slug}index.md`;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <h1>{post.frontmatter.title}</h1>
        <small
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
            marginTop: rhythm(-0.6),
            color: `#aaaaaa`,
          }}
        >
          {post.frontmatter.date}
        </small>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />

        <a href={editUrl} target="_blank" rel="noopener noreferrer">
          Edit on GitHub
        </a>

        <SocialShare
          social={social}
          config={{
            url: `${siteUrl}${slug}`,
            title: post.frontmatter.title,
          }}
          tags={post.frontmatter.tags}
        />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Bio />

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
        siteUrl
        social {
          twitter
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
      }
    }
  }
`;
