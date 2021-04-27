import React from 'react';
import './header.css';
import storage from '../../firebase';
import MenuOption from './menu-option/menu-option';
import history from "../../shared/history";
import *  as profileConf from '../../assets/profile.conf.json';
 class Header extends React.Component {

	constructor(props) {
	
		super(props);

		this.overlayAction = { on: 'overlay-on', off: 'overlay-off'};
		this.headerClass = {
			overflow: 'header header-overflow',
			noOverflow: 'header header-no-overflow'
		};
	
		this.state = {
			imageUrls: [],
			overlayClass: this.overlayAction.on,
			headerClass: this.headerClass.overflow
		};

		this.goToMyProfile = this.goToMyProfile.bind(this);
	}

	componentDidMount() {

		/**
		 * TODO: Validate if this logic can be used in the future to handle dynamic images from firebase
		 */

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

	
	random(max, min){
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	goToMyProfile() {
		this.props.history.push('/me');
	}

	options = [
		{
			title: profileConf.menu_options[1].name, // 'About me',
			action: () => {
				history.push("/me");
			},
		},
		{
			title: profileConf.menu_options[0].name, // 'My Experience',
			action: () => {
				
			},
		},
		{
			title: profileConf.menu_options[2].name, // 'My blog',
			action: () => {},
		},
	];

	changeOverlayClass(on) {

		const action = on ? this.overlayAction.on : this.overlayAction.off;

		const headerClass = on ? this.headerClass.overflow : this.headerClass.noOverflow;

		const classes = {overlayClass: action, headerClass};

		this.setState(classes);

	}


	render() {
		return (
			<div className={this.state.headerClass}>

				<div className="img-header"/>

				<div className={this.state.overlayClass}></div>

				<ul className='header-options'>
					{this.options.map((option, ind) => {
						return <MenuOption
						key={ind}
						imageUrl={this.state.imageUrls[0]} 
						title={option.title} 
						changeOverlayClass={this.changeOverlayClass.bind(this)}
						handleClick={option.action}/>
					})}

				</ul>
			</div>
		);
	}
}

export default Header;	
