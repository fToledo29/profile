import { render } from '@testing-library/react';
import React from 'react';
import { withRouter } from 'react-router-dom';
import './me.css';

const Me = () => {
	const bubbles = [
		{
			size: 800,
			color: '#6b6bda',
		},
		{
			size: 400,
			color: '#00eeff',
		},
		{
			size: 700,
			color: '#ca6f9d',
		},
		{
			size: 800,
			color: '#c300ff',
		},
		{
			size: 900,
			color: '#00eeff',
		},
		{
			size: 200,
			color: '#ff8800',
		},
		{
			size: 300,
			color: '#ca6f9d',
		},
		{
			size: 400,
			color: '#f5c542',
		},
		{
			size: 400,
			color: '#00ff80',
		},
		{
			size: 100,
			color: '#6b6bda',
		},
		{
			size: 200,
			color: '#ff8800',
		},
		{
			size: 300,
			color: '#ca6f9d',
		},
		{
			size: 400,
			color: '#c300ff',
		},
		{
			size: 400,
			color: '#00eeff',
		},
		{
			size: 500,
			color: '#6b6bda',
		},
		{
			size: 600,
			color: '#ff8800',
		},
		{
			size: 100,
			color: '#6b6bda',
		},
		{
			size: 200,
			color: '#ff8800',
		},
		{
			size: 300,
			color: '#ca6f9d',
		},
		{
			size: 400,
			color: '#f5c542',
		},
		{
			size: 100,
			color: '#6b6bda',
		},
		{
			size: 200,
			color: '#ff8800',
		},
		{
			size: 300,
			color: '#ca6f9d',
		},
		{
			size: 400,
			color: '#c300ff',
		},
		{
			size: 400,
			color: '#00ff80',
		},
		{
			size: 400,
			color: '#00eeff',
		},
		{
			size: 700,
			color: '#ca6f9d',
		},
		{
			size: 800,
			color: '#f5c542',
		},
		{
			size: 900,
			color: '#00ff80',
		},
	];
	let animationIndex = 1;

	const reandom = (max, min) => {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	return (
		<>
			<div className='my-profile-container'>
				<p>
					My name is Jorge Fernando Toledo Ramirez, yeah I know it's a long name, but that's my full name
					and I'm proud of it, however some people call me just Fernando or Fer... 
				</p>
				<p>
					Proident excepteur ullamco dolore reprehenderit culpa enim incididunt cillum esse. In labore excepteur esse do eiusmod nisi id exercitation aute ea incididunt voluptate. Qui id Lorem et officia aliquip fugiat sit mollit eu sint eu cupidatat sint. Duis ad eu commodo veniam. Tempor in non sint culpa et laborum dolore ipsum ipsum proident. Non aute laborum eu non ullamco reprehenderit culpa enim officia duis. Velit exercitation eu aliquip adipisicing dolore Lorem irure duis fugiat id.
				</p>
				<p>
					Aliqua commodo exercitation magna laborum. Laborum fugiat eiusmod occaecat proident exercitation amet ipsum ipsum. Proident do consequat occaecat excepteur deserunt ut nulla adipisicing cupidatat minim nisi proident occaecat. Id qui eiusmod aliquip elit enim et adipisicing tempor velit et. Tempor qui quis eiusmod incididunt magna nostrud aute consectetur excepteur minim magna fugiat tempor.
				</p>
				<p>
					Proident aute nostrud culpa id laboris pariatur qui voluptate eu non. Irure aliqua ipsum deserunt occaecat. Qui tempor in exercitation sint labore. Sit aute dolor ad incididunt incididunt sunt. Deserunt excepteur est deserunt fugiat in sint elit sint labore irure et proident.
				</p>
			</div>

			{bubbles.map((bubble, index) => {
				const top = reandom(1, 100);
				const left = reandom(1, 100);
				const animationNum = reandom(1, 10);
				animationIndex = animationIndex < 7 ? animationIndex + 1 : 1;
				const animationClass = 'bubble-' + animationNum;
				const delay = reandom(15000, 1000);
				const alternate = reandom(1, 2);
				let res = new Promise((resol, rej)=> {
					setTimeout(() => {
	
						resol( <div 
						className={animationClass}
						key={index} 
						style={{
							borderRadius: '50%',
							backgroundColor: bubble.color,
							height: (bubble.size / 4), 
							width: (bubble.size / 4),
							top: `${top}%`,
							left: `${left}%`,
							position: 'fixed',
							opacity: 0.5,
							animation: `move-buble-${animationNum} ${alternate === 1 ? '30s' : '70s'} ease-out infinite`,
							animationDirection: alternate === 1 ? 'alternate-reverse' : 'alternate',
							WebkitAnimationDirection: alternate === 1 ? 'alternate-reverse' : 'alternate',
						}} ></div>)
					}, delay);
				});

				res.then((res) => {
					render(res);
				});
			})}

			
		</>
	);
};

export default withRouter(Me);
