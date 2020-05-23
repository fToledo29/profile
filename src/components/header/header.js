import React from 'react';
import './header.css';

import storage from '../../firebase';

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

		const pathReference = storage.ref(); //`${image}.jpg`);
		// /portfolio/assets/images/cards
		const listRef = pathReference.child('/portfolio/assets/images/menu-options');
	
		// Find all the prefixes and items.
		listRef.listAll().then(function(res) {
			// res.prefixes.forEach(function(folderRef) {
			// // All the prefixes under listRef.
			// // You may call listAll() recursively on them.
			// });
			res.items.forEach(function(itemRef) {
			// All the items under listRef.
				itemRef.getDownloadURL().then((file) => {
					// images.push(file);
					const newUrls = self.state.imageUrls.slice();
					newUrls.push(file);
					self.setState({ imageUrls: newUrls });
					// state.images.push(file);
					// setState({ ...state, images: [...state.images, state.images] });
				});
			});
		}).catch(function(error) {
			console.log('Error getting images from storage: ', error);
		});
	  
	
	}


	render() {
		return (
			<div className='header'>
				<ul className='header-options'>
					<li className='option'>
						<h1 className='option-title'>Ludmila Dyomina</h1>
						<img className='option-image'
						alt="Ludi" src={this.state.imageUrls[0]} />
					</li>
					<li className='option'>
						<h2 className='option-title'>About</h2>	
						<img className='option-image'
						alt="About" src={this.state.imageUrls[0]} />
					</li>
					<li className='option'>
						<h2 className='option-title'>Contact</h2>
						<img className='option-image'
						alt="Contact"
						src={this.state.imageUrls[0]} />
					</li>
				</ul>
			</div>
		);
	}
}

export default Header;	
