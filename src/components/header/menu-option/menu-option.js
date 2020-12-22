import React from 'react';

const MenuOption = ({ title, handleClick, imageUrl}) => {
	return (
		<li className='option' onClick={() => handleClick()}>
			<h1 className='option-title'>{title}</h1>
			<img className='option-image'
			alt={title} src={imageUrl} />
		</li>
	);
};

export default MenuOption;
