import React from 'react';
import './header.css';
import storage from '../../firebase';
import MenuOption from './menu-option/menu-option';
import history from "../../shared/history";

 class Header extends React.Component{
	
	state;

	constructor(props) {
	
		super(props);
	
		this.state = {
			imageUrls: []
		};

		this.goToMyProfile = this.goToMyProfile.bind(this);
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

	goToMyProfile() {
		this.props.history.push('/me');
	}

	options = [
		{
			title: 'Fernando Toledo',
			action: () => {
				history.push("/me");
			},
		},
		{
			title: 'About',
			action: () => {},
		},
		{
			title: 'Contact',
			action: () => {},
		},
	];


	render() {
		return (
			<div className='header'>
				<ul className='header-options'>
					{this.options.map((option, ind) => {
						return <MenuOption 
						key={ind}
						imageUrl={this.state.imageUrls[0]} 
						title={option.title} 
						handleClick={option.action}/>
					})}

				</ul>
			</div>
		);
	}
}

export default Header;	
