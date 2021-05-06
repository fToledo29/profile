import React, { useState, useEffect} from 'react';
import Card from './card/card';
import storage from '../../firebase';
import './cards.css';
const imgContainer = '/portfolio/assets/images/projects';

const Cards = () => {

	const [state, setState] = useState({imageUrls: []});

	const [styles, setStyles] =  useState([]);

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

		const elements = Array.from(document.querySelectorAll('.card-container'));
		elements.forEach(el => {
			el.style.webkitAnimationPlayState = 'paused';
		});

	}

	const onMouseLeave = () => {
		const elements = Array.from(document.querySelectorAll('.card-container'));
		elements.forEach(el => {
			el.style.webkitAnimationPlayState = 'running';
		});
	}

	return (
		
		<div className="cards">



			{state.imageUrls.map((url, index, ar) => {

				const count = (index + 1);

				return <div 
				style={styles[index]}
				onMouseEnter={(e) => onMouseEnter(e, index)} 
				onMouseLeave={(e) => onMouseLeave(e)}
				className={"card-container position_" + count} 
				key={index}>
					<Card 
					key={index}
					smallDesc=' Praesent non maximus eros. Aenean convallis sollicitudin euismod.'
					alt="Sample alt"
					cardClass={(index % 2 === 0) ? 'left' : 'right'}
					url={url} />
				</div>

			})}

		</div>
	);
};

export default Cards;
