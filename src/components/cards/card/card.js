import React from 'react';
import './card.css';

const Card = (props) => {
	return (
		<div className='card'>
			<img 
			alt={props.alt} 
			src={props.url}/>
			<span>{props.smallDesc}</span>
		</div>
	);
};

export default Card;
