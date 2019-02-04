import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	FacebookShareButton,
	LinkedinShareButton,
	TwitterShareButton,
	WhatsappShareButton,
    RedditShareButton,
} from 'react-share';

const SocialShare = ({ social, config, tags }) => (
	<section className="post-social">
		<FacebookShareButton url={config.url} className="button is-outlined is-rounded facebook" >
			<span className="icon">
				<FontAwesomeIcon icon={['fab', 'facebook-f']} />
			</span>
			<span className="text">Facebook</span>
		</FacebookShareButton>
		<TwitterShareButton url={config.url} className="button is-outlined is-rounded twitter" title={config.title} via={social.twitter.split('@').join('')} hashtags={tags} >
			<span className="icon">
				<FontAwesomeIcon icon={['fab', 'twitter']} />
			</span>
			<span className="text">Twitter</span>
		</TwitterShareButton>
		<GooglePlusShareButton url={config.url} className="button is-outlined is-rounded googleplus" >
			<span className="icon">
				<FontAwesomeIcon icon={['fab', 'google-plus-g']} />
			</span>
			<span className="text">Google+</span>
		</GooglePlusShareButton>
		<LinkedinShareButton url={config.url} className="button is-outlined is-rounded linkedin" title={config.title} >
			<span className="icon">
				<FontAwesomeIcon icon={['fab', 'linkedin-in']} />
			</span>
			<span className="text">LinkedIn</span>
		</LinkedinShareButton>
		<RedditShareButton url={config.url} className="button is-outlined is-rounded reddit" title={config.title} >
			<span className="icon">
				<FontAwesomeIcon icon={['fab', 'reddit-alien']} />
			</span>
			<span className="text">Reddit</span>
		</RedditShareButton>
		<WhatsappShareButton url={config.url} className="button is-outlined is-rounded whatsapp" title={config.title} >
			<span className="icon">
				<FontAwesomeIcon icon={['fab', 'whatsapp']} />
			</span>
			<span className="text">WhatsApp</span>
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