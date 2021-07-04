import React, { useState, useEffect} from 'react';
import Card from './card/card';
import storage from '../../firebase';
import './cards.css';
import * as jsonConfig from '../../assets/profile.conf.json';
const imgContainer = '/portfolio/assets/images/projects';

const Cards = () => {

	const [state, setState] = useState({imageUrls: []});

	const [styles, setStyles] =  useState([]);

	const [width, setWidth] =  useState(null);

	const getImages = async (imgContainer) => {

		const newState = {imageUrls: []};
	
		const pathReference = storage.ref();

		const listRef = pathReference.child(imgContainer);

		// Find all the prefixes and items.
		const res = await listRef.listAll().catch(error => console.log('Error getting images from storage: ', error));

		let promises = [];

		res.items.forEach((itemRef) => promises.push(itemRef.getDownloadURL()));

		const urls = await Promise.all(promises).catch(error => console.log('Error getting images from storage: ', error));

		urls.forEach((url) => newState.imageUrls = [...newState.imageUrls, url]);

		setState(newState);
	}

	useEffect(() => {

		const windowWidth = (window.innerWidth > 0) ? window.innerWidth : window.screen.width;

		setWidth(windowWidth);

		setStyles([
			{
				id: 0,
				animation: `card-rotation-1 ease-in-out 30s infinite`,
				top: '-5%',
				left: '40%'
			},
			{
				id: 1,
				animation: `card-rotation-2 ease-in-out 30s infinite`,
				top: '30%',
				left: '65%'
			},
			{
				id: 2,
				animation: `card-rotation-3 ease-in-out 30s infinite`,
				top: '60%',
				left: '40%'
			},
			{
				id: 3,
				animation: `card-rotation-4 ease-in-out 30s infinite`,
				top: '30%',
				left: '15%'
			}
		]);

		getImages(imgContainer);

	}, []);

	const onMouseEnter = (e, index) => {
		document.querySelector('.position_' + (index + 1) + ' .card').style.width = '40.5rem';
		document.querySelector('.position_' + (index + 1) + ' .card').style.height = '20rem';
		document.querySelector('.position_' + (index + 1) + ' .card').style.zIndex = 2;


		const elements = Array.from(document.querySelectorAll('.card-container'));
		elements.forEach(el => {
			el.style.webkitAnimationPlayState = 'paused';
		});

	}

	const onMouseLeave = (e, index) => {
		const elements = Array.from(document.querySelectorAll('.card-container'));
		elements.forEach(el => {
			el.style.webkitAnimationPlayState = 'running';
		});
		document.querySelector('.position_' + (index + 1) + ' .card').style.width = '';
		document.querySelector('.position_' + (index + 1) + ' .card').style.height = '';
		document.querySelector('.position_' + (index + 1) + ' .card').style.zIndex = 'inherit';
	}

	return (
		
		<div className="cards">



			{state.imageUrls.map((url, index, ar) => {

				const count = (index + 1);

				return <div 
				style={width > 480 ? styles[index] : null}
				onMouseEnter={(e) => onMouseEnter(e, index)} 
				onMouseLeave={(e) => onMouseLeave(e, index)}
				className={"card-container position_" + count} 
				key={index}>
					<Card 
					key={index}
					smallDesc={jsonConfig['front-end-technologies'][index].description}
					alt={jsonConfig['front-end-technologies'][index].name}
					// cardClass={(index % 2 === 0) ? 'left' : 'right'}
					url={url} />
				</div>

			})}

		</div>
	);
};

export default Cards;
