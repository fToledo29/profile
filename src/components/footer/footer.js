import React, { useState } from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Footer = () => {

	const twitterUser = 'fernandot_23';
	const linkedInUser = 'fernandotoledo23';
	const githubUser = 'fToledo29';
	const email = 'fernandotoledo23@gmail.com';
	const instagramUser = 'ftoledo23';
	const facebookUser = 'fernandot23';
	const icon4x = '4x';
	const icon5x = '5x';


	const [mediaTwitter, mediaTwitterChange] = useState(icon4x);
	const [mediaGithub, mediaGithubChange] = useState(icon4x);
	const [mediaEnvelop, mediaEnvelopChange] = useState(icon4x);
	const [mediaLinkedIn, mediaLinkedInChange] = useState(icon4x);
	const [mediaFacebook, mediaFacebookChange] = useState(icon4x);
	const [mediaInstagram, mediaInstagramChange] = useState(icon4x);


	const twitter = 'https://twitter.com/' + twitterUser;
	const linkedIn = 'https://www.linkedin.com/in/' + linkedInUser;
	const github = 'https://github.com/' + githubUser;
	const instagram = 'https://www.instagram.com/' + instagramUser
	const facebook = 'https://www.facebook.com/' + facebookUser;

	return (
		<div className="footer">
			<div className="img-footer"></div>
			<div className="footer-overlay" ></div>
			<div className='footer-info'>
				<ul>
					<li>

						<a 
						onMouseEnter={() => mediaTwitterChange(icon5x)}
						onMouseLeave={() => mediaTwitterChange(icon4x)}
						target="_blank" 
						rel="noopener noreferrer" 
						href={twitter}>

							<FontAwesomeIcon 
							size={mediaTwitter} className="icons" icon={['fab','twitter-square']} />
						</a>
					</li>
					<li>
						<a 
						onMouseEnter={() => mediaGithubChange(icon5x)}
						onMouseLeave={() => mediaGithubChange(icon4x)}
						target="_blank" 
						rel="noopener noreferrer" 
						href={github}>
							<FontAwesomeIcon 
							size={mediaGithub} className="icons" icon={['fab','github-square']} />
						</a>
					</li>
				</ul>
			</div>
			<div className="footer-media">
				<ul>
					<li>
						<a 
						onMouseEnter={() => mediaEnvelopChange(icon5x)}
						onMouseLeave={() => mediaEnvelopChange(icon4x)}
						target="_blank" 
						rel="noopener noreferrer" 
						href={'mailto:' + email}>
							<FontAwesomeIcon 
							size={mediaEnvelop} className="icons" icon={['far','envelope']} />
						</a>
					</li>
					<li>
						<a 
						onMouseEnter={() => mediaLinkedInChange(icon5x)}
						onMouseLeave={() => mediaLinkedInChange(icon4x)}
						target="_blank" 
						rel="noopener noreferrer" 
						href={linkedIn}>
							<FontAwesomeIcon 
							size={mediaLinkedIn} className="icons" icon={['fab','linkedin']} />
						</a>
					</li>
				</ul>
			</div>
			<div className="footer-contact">
				<ul>
					<li>
						<a 
						onMouseEnter={() => mediaFacebookChange(icon5x)}
						onMouseLeave={() => mediaFacebookChange(icon4x)}
						target="_blank" 
						rel="noopener noreferrer" 
						href={facebook}>
						<FontAwesomeIcon 
						 size={mediaFacebook} className="icons" icon={['fab','facebook-square']} />
						</a>
					</li>
					<li>
						<a 
						onMouseEnter={() => mediaInstagramChange(icon5x)}
						onMouseLeave={() => mediaInstagramChange(icon4x)}
						target="_blank" 
						rel="noopener noreferrer" 
						href={instagram}>
							<FontAwesomeIcon 
						 size={mediaInstagram} className="icons" icon={['fab','instagram-square']} />

						</a>
					</li>
				</ul>
			</div>
		</div>
	)
}
