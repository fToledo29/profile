import React from 'react';
import './footer.css';
import imgx from '../../assets/images/footer/flowerFooter.jpg';   

export const Footer = () => {

	const twitterUser = 'fernando_29837';
	const linkedInUser = 'fernandotoledo23';
	const githubUser = 'fToledo29';
	const email = 'fernandotoledo23@gmail.com';
	const instagramUser = 'ftoledo23';


	const twitter = 'https://twitter.com/' + twitterUser;
	const linkedIn = 'https://www.linkedin.com/in/' + linkedInUser;
	const github = 'https://github.com/' + githubUser;
	const instagram = 'https://www.instagram.com/' + instagramUser

	return (
		<div className="footer">
			<img 
			alt='Footer' 
			src={imgx}/>
			<div className='card-overlay'></div>
			<div className='footer-info'>
				<ul>
					<li>
						{twitter}
					</li>
					<li>
						{github}
					</li>
				</ul>
			</div>
			<div className="footer-media">
				<ul>
					<li>
						{linkedIn}
					</li>
					<li>
						{email}
					</li>
				</ul>
			</div>
			<div className="footer-contact">
				<ul>
					<li>
						{instagram}
					</li>
					<li>Facebook</li>
				</ul>
			</div>
		</div>
	)
}
