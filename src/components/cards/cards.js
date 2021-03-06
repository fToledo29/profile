import React, { useState, useEffect} from 'react';
import Card from './card/card';
import storage from '../../firebase';
import './cards.css';
const imgContainer = '/portfolio/assets/images/projects';

const Cards = () => {

	const [state, setState] = useState({imageUrls: []});

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

		getImages(imgContainer);

	}, []);

	return (
		
		<div className="cards">



			{state.imageUrls.map((url, index, ar) => {

				return <div className={"card-container position_" + (index + 1)} key={index}>
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
