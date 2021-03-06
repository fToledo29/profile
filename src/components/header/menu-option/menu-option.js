import React from 'react';
import './menu-option.css';

const MenuOption = ({ title, handleClick, imageUrl, changeOverlayClass}) => {

	return (
		<li
		onMouseLeave={() => changeOverlayClass(true)}
		onMouseEnter={() => changeOverlayClass(false)}
		className={'option ' + title.toLocaleLowerCase().replace(/ /g, '')} 
		onClick={() => handleClick()}
		>
			<h1 className='option-title'>{title}</h1>
			{/* <img className='option-image'
			alt={title} src={imageUrl} /> */}
		</li>
	);
};

export default MenuOption;
