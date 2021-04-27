import React from 'react';
import Keyframes from '@keyframes/core';
import './bubbleB.css';
import { Component } from 'react';
import Bubble from './bubble/bubble';

class BubbleBounce extends Component {

	constructor(props) {
		super(props);

		this.isSupported = false;

		this.cssframeArr = [];

		this.setBubbleCSSFram();

		this.setBubbleCSSFram = this.setBubbleCSSFram.bind(this);

	}

	random(max, min) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}
	
	setBubbleCSSFram() {

		this.isSupported = Keyframes.isSupported();

		this.cssframeArr = Array(this.props.bubblesQuantity);

		if (this.isSupported) {

			let bubbleCSSFrame = '';

			for (let i = 0; i < this.cssframeArr.length; i++) {
				
				bubbleCSSFrame = (i % 2 === 0 ) ? Keyframes.defineCSS([{
					name: `move-bubble-${(i + 1)}`,
					'0%':   {
						opacity: 0,
					},
					'30%':  {
						opacity: 0.5,
						top: `0%`, 
						left: `${this.random(0, 99)}%`,
					},
					'50%':  {
						top: `100%`, 
						left: `${this.random(0, 99)}%`,
					},
					'70%':  {
						top: `0%`, 
						left: `${this.random(0, 99)}%`,
					},
					'90%':  {
						top: `100%`,
						left: `${this.random(0, 99)}%`,
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
						left: `${this.random(0, 99)}%`,
					},
					'70%':  {
						top: `100%`, 
						left: `${this.random(0, 99)}%`,
					},
					'50%':  {
						top: `0%`, 
						left: `${this.random(0, 99)}%`,
					},
					'30%':  {
						top: `100%`,
						left: `${this.random(0, 99)}%`,
					},
					'0%': {
						opacity: 0,
					}
				}]) ;
				
				this.cssframeArr[i] = bubbleCSSFrame;
			}

		}
	
	}

	getCSSFrame(alternate, animationNum) {

		return Keyframes.playCSS({
		name: `move-bubble-${animationNum}`,
		duration: `${this.random(90, 60)}s`,
		timingFunction: 'ease-out',
		delay: '0s',
		iterationCount: 'infinite',
		direction: alternate === 1 ? 'alternate-reverse' : 'alternate',
		});

	}

	render() {
		return (
			<div>
				<style>
					{this.cssframeArr.map((x) => x)}
				</style>

				{this.isSupported ? this.cssframeArr.map((bubble, index) => {
					const top = this.random(1, 100);
					const left = this.random(1, 100);
					const animationNum = this.random(1, 10);
					const animationClass = 'bubble-' + animationNum;
					const delay = index < 5 ? this.random(100, 1) : this.random(25000, 100);
					const alternate = this.random(1, 2);
					const height = (this.random(100, 1100) / 4);
					const width = height;
					const cssAnimation = this.getCSSFrame(alternate, index + 1);

					const configuration = {
						animationClass, 
						index, 
						height, 
						width,
						top,
						left,
						cssAnimation,
						alternate
					};

					return  <Bubble
					key={index} 
					configuration={configuration} 
					delayedTime={delay}
					random={this.random} />;

				}) : null}
			</div>
		);
	}
}

export default BubbleBounce;
