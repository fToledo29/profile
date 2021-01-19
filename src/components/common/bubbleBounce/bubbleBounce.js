import React from 'react';
import { render } from '@testing-library/react';
import Keyframes from '@keyframes/core';
import './bubbleBounce.css';

const BubbleBounce = () => {

	const isSupported = Keyframes.isSupported();

	let cssframeArr = Array(40);

	const random = (max, min) => {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	if (isSupported) {

		let bubbleCSSFrame = '';

		for (let i = 0; i < cssframeArr.length; i++) {
			
			bubbleCSSFrame = (i % 2 === 0 ) ? Keyframes.defineCSS([{
				name: `move-bubble-${(i + 1)}`,
				'0%':   {
					opacity: 0,
				},
				'30%':  {
					opacity: 0.5,
					top: `0%`, 
					left: `${random(0, 99)}%`,
				},
				'50%':  {
					top: `100%`, 
					left: `${random(0, 99)}%`,
				},
				'70%':  {
					top: `0%`, 
					left: `${random(0, 99)}%`,
				},
				'90%':  {
					top: `100%`,
					left: `${random(0, 99)}%`,
				},
				'100%': {
					opacity: 0,
				}
			}]) :  Keyframes.defineCSS([{
				name: `move-bubble-${(i + 1)}`,
				'100%':   {
					opacity: 0,
				},
				'90%':  {
					opacity: 0.5,
					top: `0%`, 
					left: `${random(0, 99)}%`,
				},
				'70%':  {
					top: `100%`, 
					left: `${random(0, 99)}%`,
				},
				'50%':  {
					top: `0%`, 
					left: `${random(0, 99)}%`,
				},
				'30%':  {
					top: `100%`,
					left: `${random(0, 99)}%`,
				},
				'0%': {
					opacity: 0,
				}
			}]) ;
			
			cssframeArr[i] = bubbleCSSFrame;
		}

	}

	const getCSSFrame = (alternate, animationNum) => {

		return Keyframes.playCSS({
		     name: `move-bubble-${animationNum}`,
		     duration: `${random(90, 60)}s`,
		     timingFunction: 'ease-out',
		     delay: '0s',
		     iterationCount: 'infinite',
		     direction: alternate === 1 ? 'alternate-reverse' : 'alternate',
		 });
	}

	return (
		<div>
			<style>
				{cssframeArr.map((x) => x)}
			</style>
				{isSupported ? cssframeArr.map((bubble, index) => {
				const top = random(1, 100);
				const left = random(1, 100);
				const animationNum = random(1, 10);
				const animationClass = 'bubble-' + animationNum;
				const delay = index < 5 ? random(100, 1) : random(25000, 100);
				const alternate = random(1, 2);
				const height = (random(100, 1100) / 4);
				const width = height;
				const cssAnimation = getCSSFrame(alternate, index + 1);

				let res = new Promise((resol, rej)=> {
					setTimeout(() => {
	
						resol( <div 
						className={`${animationClass} bubble`}
						key={index}
						style={
							{
							borderRadius: '50%',
							backgroundColor: `#${random(100000, 999999)}`,
							height: height,
							width: width,
							top: `${top}%`,
							left: `${left}%`,
							position: 'fixed',
							opacity: 0.5,
							animation: cssAnimation,
							animationDirection: alternate === 1 ? 'alternate-reverse' : 'alternate',
							WebkitAnimationDirection: alternate === 1 ? 'alternate-reverse' : 'alternate',
						}} ></div>)
					}, delay);
				});

				res.then((res) => {
					render(res);
				});
			}) : null}
			
		</div>
	)
}

export default BubbleBounce;
