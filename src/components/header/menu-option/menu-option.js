import React from 'react';

const MenuOption = (props) => {
	return (
		<div>
			<h1 className='option-title'>{props.title}</h1>
			<img className='option-image'
			alt={props.title} src={props.imageUrl} />
		</div>
	);
};

export default MenuOption;
