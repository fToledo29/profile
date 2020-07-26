import React from 'react';
import './header.css';

import storage from '../../firebase';
import MenuOption from './menu-option/menu-option';

 class Header extends React.Component{
	
	state;

	constructor(props) {
		super(props);
		this.state = {
			imageUrls: []
		};
	}

	componentDidMount() {

		const self = this; 

		const pathReference = storage.ref();

		const listRef = pathReference.child('/portfolio/assets/images/menu-options');
	
		// Find all the prefixes and items.
		listRef.listAll().then(function(res) {

			res.items.forEach(function(itemRef) {
			// All the items under listRef.
				itemRef.getDownloadURL().then((file) => {
					const newUrls = self.state.imageUrls.slice();
					newUrls.push(file);
					self.setState({ imageUrls: newUrls });
				});
			});
		}).catch(function(error) {
			console.log('Error getting images from storage: ', error);
		});
	  
	
	}

	options = ['Fernando Toledo', 'About', 'Contact'];


	render() {
		return (
			<div className='header'>
				<ul className='header-options'>
					{this.options.map((option) => {
						return <MenuOption imageUrl={this.state.imageUrls[0]} title={option} />
					})}

				</ul>
			</div>
		);
	}
}

export default Header;	
