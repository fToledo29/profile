import React from 'react';
import './header.css';
import storage from '../../firebase';
import MenuOption from './menu-option/menu-option';
import history from "../../shared/history";
import DOMPurify from 'dompurify';
import {ReactComponent as SVGHeader} from '../../assets/images/header/headerX4.1.svg';
// import {ReactComponent as SVGHeader} from '../../assets/images/header/SVG/asset_4.svg';
import Spark from './spark/spark';

// TODO: Implement: https://stackblitz.com/edit/gsap-react-route-animation?file=components.js
 class Header extends React.Component{

	constructor(props) {
	
		super(props);

		this.lines = [];
	
		this.state = {
			imageUrls: [],
			svgFile: null,
			sparkClass: 'spark-state1',
			lines: []
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

		this.setState({svgFile: svgCleanFile});

		this.changeSparkState();
	
	}

	
	random(max, min){
		return Math.floor(Math.random() * (max - min + 1) + min);
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

	changeSparkState() {

		const lines = [...document.querySelectorAll("svg image")].filter(image => {
			return image.getBoundingClientRect().width > 35 || image.getBoundingClientRect().height > 30;
		});
		this.setState({lines: lines});

	}

	render() {
		return (
			<div className='header'>

				{this.state.lines ? this.state.lines.map((line, ind) => {
					
					const classSparkClass = 'spark-state0_' + 
					parseInt(line.getBoundingClientRect().x) + 
					parseInt(line.getBoundingClientRect().y) +  
					parseInt(line.getCTM().d) + 
					parseInt(line.getCTM().e);	


					const delay = this.random(200000, 1000);
					// return (line.getAttribute('x1') === '1682.75') ? 
					// <Spark key={ind} sparkClass={classSparkClass} line={line} delayedTime={delay} /> : null;
				

					return <Spark key={ind} sparkClass={classSparkClass} line={line} delayedTime={delay} />;

				}) : null}

				<SVGHeader className="header-svg-bg"/>

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
