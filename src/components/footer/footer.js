import React from 'react';
import './footer.css';
import imgx from '../../assets/images/footer/flowerFooter.jpg';   

export const Footer = () => {
	return (
		<div className="footer">
			<img 
			alt='Footer' 
			src={imgx}/>
			<div className='card-overlay'></div>
			<div className='footer-info'>
				<ul>
					<li>Pariatur enim officia occaecat.</li>
					<li>Ad velit exercitation non officia esse.</li>
					<li>Laboris amet commodo eiusmod amet.</li>
				</ul>
			</div>
			<div className="footer-media">
				<ul>
					<li>Facebook</li>
					<li>Tweeter</li>
					<li>Instagram</li>
				</ul>
			</div>
			<div className="footer-contact">
				<ul>
					<li>Pariatur enim officia occaecat.</li>
					<li>Ad velit exercitation non officia esse.</li>
					<li>Laboris amet commodo eiusmod amet.</li>
				</ul>
			</div>
		</div>
	)
}
