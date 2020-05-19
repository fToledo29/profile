import React from 'react';
import Card from './card/card';
import './cards.css';
import niceImage from '../../assets/images/9fb73a97063669.5ebc6ab5ea934.jpg';
import niceImage2 from '../../assets/images/4883b694926993.5ebc2f17d37d4.jpg';
import niceImage3 from '../../assets/images/f263d897125933.5ebdb75813b71.jpg';
import niceImage4 from '../../assets/images/4af5ce96839423.5eb7a0de9b325.jpg';
import niceImage5 from '../../assets/images/a1c47997056591.5ebc4a5db2016.jpg';
import niceImage6 from '../../assets/images/ec6f2097157057.5ebe844a4186f.jpg';


const Cards = () => {
	return (
		<div className="cards">
			<Card 
			alt="Sample alt"
			url={niceImage} />

			<Card 
			alt="Sample alt"
			url={niceImage2} />

			<Card 
			alt="Sample alt"
			url={niceImage3} />

			<Card 
			alt="Sample alt"
			url={niceImage4} />


			<Card 
			alt="Sample alt"
			url={niceImage5} />

			<Card 
			alt="Sample alt"
			url={niceImage6} />
		</div>
	);
};

export default Cards;
