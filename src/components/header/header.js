import React from 'react';
import './header.css';

const Header = () => {
	return (
		<div className='header'>
			<ul className='header__options'>
				<li>
					<h1>Ludmila Dyomina</h1>	
				</li>
				<li>
					<h2>About</h2>	
				</li>
				<li>
					<h2>Contact</h2>	
				</li>
			</ul>
		</div>
	);
};

export default Header;	
