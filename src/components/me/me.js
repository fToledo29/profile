import React from 'react';
import { withRouter } from 'react-router-dom';
import BubbleB from 'bubble-b';
import './me.css';

const Me = () => {

	return (
		<>
			<div className='my-profile-container'>

				<div className="btn-container">
					<button className="go-back-btn">Go back</button>
				</div>
				
				<div className="me-desc">
					<p>
						My name is Fernando Toledo. I was born in Toluca State of Mexico <span role="img" aria-label="Mexico">🇲🇽</span>, 
						I'm currently working for Wipro, a tech company <span role="img" aria-label="Laptop">💻</span> in the 
						US <span role="img" aria-label="USA">🇺🇸</span>, I'm a UI developer <span role="img" aria-label="Technologist">🧑🏻‍💻</span>; not only I love 
						JavaScript  but I also like CSS <span role="img" aria-label="Art">🎨</span>. I have been using CSS since 7 years ago, HTML 9 years ago, JavaScript 
						8, Angular 4 years and I just started using React, I have been improving my skills learning from my coworkers, 
						taking courses and doing some research.
					</p>

					<p>
						In my spare time I like to watch movies <span role="img" aria-label="Movies">🎥 🎞</span>, series, anime, I like 
						doing yoga <span role="img" aria-label="Yoga">🧘🏻‍♂️</span> and learning new things I usually watch movies and series on Netflix and Amazon I watch some anime 
						on Crunchyroll and I take courses from Udemy. I usually do some yoga twice a week sometimes a bit more. but most 
						of the time I definitely try to do something with JS <span role="img" aria-label="Technologist">🧑🏻‍💻</span>.	
					</p>
				</div>
			</div>
			<BubbleB bubblesNum={50} />


		</>
	);
};

export default withRouter(Me);
