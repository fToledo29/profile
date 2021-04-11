import React from 'react';
import { withRouter } from 'react-router-dom';
import Cards from '../cards/cards';
import { Footer } from '../footer/footer';
import Header from '../header/header';
import './home.css';

const Home = () => {

	// TODO: Implement this function to send user to the top of the page.
	const onGoUp = () => {
		document.documentElement.scrollTo(0, 0);
	}

	const onGoDown = () => {
		const innH = window.innerHeight;
		const scrlHeDoc = document.documentElement.scrollHeight;
		document.documentElement.scrollTo(0, (scrlHeDoc - innH));
	}

	return (
		<div className="home">
			<Header></Header>
			<div className="go-down-btn" onClick={() => onGoDown()}></div>
			
			<Cards />
			<div className="img-body">
				<Footer className="footer" />
				<div className="overlay-on" ></div>

			</div>


		</div>
	);
};

export default withRouter(Home);
