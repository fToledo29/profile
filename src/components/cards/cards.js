import React, { useState, useEffect} from 'react';
import Card from './card/card';
import storage from '../../firebase';
import './cards.css';
const imgContainer = '/portfolio/assets/images/projects';

const Cards = () => {

	const [state, setState] = useState({imageUrls: []});

	const getImages = (imgContainer) => {

			const newState = {imageUrls: []};
		
			const pathReference = storage.ref();

			const listRef = pathReference.child(imgContainer);

			// Find all the prefixes and items.
			listRef.listAll().then(function(res) {

				let promises = [];
				
				res.items.forEach(function(itemRef) {

					// All the items under listRef.
					promises.push(itemRef.getDownloadURL());

				});

				Promise.all(promises).then((urls) => {

					urls.forEach((url) => {

						newState.imageUrls = [...newState.imageUrls, url];

					});

				}).then(() => {

					setState(newState);

				});



			}).catch(function(error) {
				console.log('Error getting images from storage: ', error);
			});
	
	}

	useEffect(() => {

		getImages(imgContainer);

	}, []);

	return (
		
		<div className="cards">

			{state.imageUrls.map((url, index, ar) => {

				return <Card 
				key={index}
				smallDesc=' Praesent non maximus eros. Aenean convallis sollicitudin euismod.'
				alt="Sample alt"
				url={url} />

			})}

		</div>
	);
};

export default Cards;
