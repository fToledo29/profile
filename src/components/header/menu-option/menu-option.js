import React from 'react';
import { Link } from 'react-router-dom';
import './menu-option.css';

const MenuOption = ({ title, handleClick, imageUrl}) => {

	return (
		<li className={'option ' + title.toLocaleLowerCase().replace(/ /g, '')} onClick={() => handleClick()}>
			<h1 className='option-title'>{title}</h1>
			{/* <img className='option-image'
			alt={title} src={imageUrl} /> */}
		</li>
	);
};

export default MenuOption;
