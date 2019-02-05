import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faWhatsapp,
  faRedditAlien,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  RedditShareButton,
} from 'react-share';

library.add(faFacebookF, faTwitter, faLinkedinIn, faWhatsapp, faRedditAlien);

const socialStyle = {
  boxShadow: `none`,
  display: `inline-flex`,
  fontSize: `1rem`,
  cursor: `pointer`,
  width: `2rem`,
  height: `2rem`,
  justifyContent: `center`,
  alignItems: `center`,
  border: `2px solid`,
  borderRadius: `50%`,
  marginRight: `0.5rem`,
  marginBottom: `2rem`,
};

const SocialShare = ({ social, config, tags }) => (
  <section>
    <h4>If you like this article, share and spread the word</h4>
    <FacebookShareButton
      url={config.url}
      style={{
        ...socialStyle,
        color: `#3b5998`,
      }}
    >
      <FontAwesomeIcon icon={faFacebookF} />
    </FacebookShareButton>
    <TwitterShareButton
      url={config.url}
      title={config.title}
      via={social.twitter.split('@').join('')}
      hashtags={tags}
      style={{
        ...socialStyle,
        color: `#1da1f2`,
      }}
    >
      <FontAwesomeIcon icon={faTwitter} />
    </TwitterShareButton>
    <LinkedinShareButton
      url={config.url}
      title={config.title}
      style={{
        ...socialStyle,
        color: `#0077b5`,
      }}
    >
      <FontAwesomeIcon icon={faLinkedinIn} />
    </LinkedinShareButton>
    <RedditShareButton
      url={config.url}
      title={config.title}
      style={{
        ...socialStyle,
        color: `#ff4500`,
      }}
    >
      <FontAwesomeIcon icon={faRedditAlien} />
    </RedditShareButton>
    <WhatsappShareButton
      url={config.url}
      title={config.title}
      style={{
        ...socialStyle,
        color: `#128c7e`,
      }}
    >
      <FontAwesomeIcon icon={faWhatsapp} />
    </WhatsappShareButton>
  </section>
);

SocialShare.propTypes = {
  social: PropTypes.shape({
    twitter: PropTypes.string.isRequired,
  }).isRequired,
  config: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
  tags: PropTypes.arrayOf(PropTypes.string),
};

SocialShare.defaultProps = {
  tags: [],
};

export default SocialShare;
