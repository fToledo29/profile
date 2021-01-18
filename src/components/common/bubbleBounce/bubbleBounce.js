import React from 'react'
import { render } from '@testing-library/react';


const BubbleBounce = () => {

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
		<div>
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
			
		</div>
	)
}

export default BubbleBounce;
