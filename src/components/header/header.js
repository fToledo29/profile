import React from 'react';
import './header.css';
import storage from '../../firebase';
import MenuOption from './menu-option/menu-option';
import history from "../../shared/history";
import DOMPurify from 'dompurify';
import {ReactComponent as SVGHeader} from '../../assets/images/header/headerX3.3.svg';
import Spark from './spark/spark';

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

		const lines = document.querySelectorAll('svg line');

		const newLines = [...lines].slice(this.random(lines.length / 2, 0), this.random(lines.length, lines.length / 2));

		console.log('Length: ', newLines.length);

		this.setState({lines: [...lines]});

	}

	render() {
		return (
			<div className='header'>

				{this.state.lines ? this.state.lines.map((line, ind) => {
					
					const classSparkClass = 'spark-state0_' + parseInt(line.getAttribute('x1')) + parseInt(line.getBBox().y);	

					// return ((line.getAttribute('stroke-width') === '6') && 
					// ((ind === ram1) || (ind === ram2) || (ind === ram3) ||
					// (ind === ram4) || (ind === ram5) || (ind === ram6))) ? 
					// <Spark key={ind} sparkClass={classSparkClass} line={line} /> : null;
					const delay = this.random(950000, 1000);
					// const delay = this.random(10000, 1000);

					console.log('delay: ', delay);

					return (line.getAttribute('stroke-width') === '6') ? <Spark key={ind} sparkClass={classSparkClass} line={line} delayedTime={delay} /> : null;

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
