import React from 'react';
import './header.css';
import storage from '../../firebase';
import MenuOption from './menu-option/menu-option';
import history from "../../shared/history";
import DOMPurify from 'dompurify';
import {ReactComponent as SVGHeader} from '../../assets/images/header/headerX3.svg';

 class Header extends React.Component{

	constructor(props) {
	
		super(props);
	
		this.state = {
			imageUrls: [],
			svgFile: null
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

		// TODO: make it work
		const svgCleanFile = this.cleanSvg(<SVGHeader/>);

		// console.log('svgCleanFile: ', svgCleanFile)

		this.setState({svgFile: svgCleanFile});
	  
	
	}

	cleanSvg(svgVal) {
		return DOMPurify.sanitize(svgVal);
	}

	goToMyProfile() {
		this.props.history.push('/me');
	}

	options = [
		{
			title: 'Fernando Toledo',
			action: () => {
				
			},
		},
		{
			title: 'About me',
			action: () => {
				history.push("/me");
			},
		},
		{
			title: 'Contact',
			action: () => {},
		},
	];

	render() {
		return (
			<div className='header'>

				{/* {this.state.svgFile ?  <div dangerouslySetInnerHTML={{__html: this.state.svgFile}} ></div> : null} */}

				<SVGHeader className="header-svg-bg"/>

				{/* <svg width="90" height="90">       
					<image 
					xlinkHref="../../assets/images/header/headerX3.svg" 
					width="90" height="90"/>    
				</svg>
				<img src="../../assets/images/header/headerX3.svg" alt="svgimage" /> */}
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
