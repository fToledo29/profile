import React from 'react';
import './card.css';

const Card = (props) => {
	return (
		<div className='card'>
			<img 
			alt={props.alt} 
			src={props.url}/>
			<div className='card-overlay'>
				<span>{props.smallDesc}</span>
			</div>

		</div>
	);
};

export default Card;
