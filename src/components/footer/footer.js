import React, { useState } from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Footer = () => {

	const twitterUser = 'fernando_29837';
	const linkedInUser = 'fernandotoledo23';
	const githubUser = 'fToledo29';
	const email = 'fernandotoledo23@gmail.com';
	const instagramUser = 'ftoledo23';
	const facebookUser = '29837T';

	const [mediaTwitter, mediaTwitterChange] = useState('4x');
	const [mediaGithub, mediaGithubChange] = useState('4x');
	const [mediaEnvelop, mediaEnvelopChange] = useState('4x');
	const [mediaLinkedIn, mediaLinkedInChange] = useState('4x');

	const [mediaFacebook, mediaFacebookChange] = useState('4x');
	const [mediaInstagram, mediaInstagramChange] = useState('4x');


	const twitter = 'https://twitter.com/' + twitterUser;
	const linkedIn = 'https://www.linkedin.com/in/' + linkedInUser;
	const github = 'https://github.com/' + githubUser;
	const instagram = 'https://www.instagram.com/' + instagramUser
	const facebook = 'https://www.facebook.com/' + facebookUser;

	return (
		<div className="footer">
			<div 
			className="footer-bg"
			alt='Footer'
			/>
			<div className='card-overlay'></div>
			<div className='footer-info'>
				<ul>
					<li>

						<a 
						onMouseEnter={() => mediaTwitterChange('5x')}
						onMouseLeave={() => mediaTwitterChange('4x')}
						target="_blank" 
						rel="noopener noreferrer" 
						href={twitter}>

							<FontAwesomeIcon 
							size={mediaTwitter} className="icons" icon={['fab','twitter-square']} />
						</a>
					</li>
					<li>
						<a 
						onMouseEnter={() => mediaGithubChange('5x')}
						onMouseLeave={() => mediaGithubChange('4x')}
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
						onMouseEnter={() => mediaEnvelopChange('5x')}
						onMouseLeave={() => mediaEnvelopChange('4x')}
						target="_blank" 
						rel="noopener noreferrer" 
						href={'mailto:' + email}>
							<FontAwesomeIcon 
							size={mediaEnvelop} className="icons" icon={['far','envelope']} />
						</a>
					</li>
					<li>
						<a 
						onMouseEnter={() => mediaLinkedInChange('5x')}
						onMouseLeave={() => mediaLinkedInChange('4x')}
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
						onMouseEnter={() => mediaFacebookChange('5x')}
						onMouseLeave={() => mediaFacebookChange('4x')}
						target="_blank" 
						rel="noopener noreferrer" 
						href={facebook}>
						<FontAwesomeIcon 
						 size={mediaFacebook} className="icons" icon={['fab','facebook-square']} />
						</a>
					</li>
					<li>
						<a 
						onMouseEnter={() => mediaInstagramChange('5x')}
						onMouseLeave={() => mediaInstagramChange('4x')}
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
