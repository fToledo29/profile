import React from 'react';

const MenuOption = (props) => {
	return (
		<li className='option'>
			<h1 className='option-title'>{props.title}</h1>
			<img className='option-image'
			alt={props.title} src={props.imageUrl} />
		</li>
	);
};

export default MenuOption;
