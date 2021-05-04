import React from 'react';
import { withRouter } from 'react-router-dom';
import Cards from '../cards/cards';
import { Footer } from '../footer/footer';
import Header from '../header/header';
import './home.css';

const Home = () => {

	const onGoUp = () => {
		document.documentElement.scrollTo(0, 0);
	}

	const goToMidSection = () => {
		const height = document.querySelector('.header.header-overflow').offsetHeight;
		document.documentElement.scrollTo(0, height);
	}

	const onGoDown = () => {
		const innH = window.innerHeight;
		const scrlHeDoc = document.documentElement.scrollHeight;
		document.documentElement.scrollTo(0, (scrlHeDoc - innH));
	}

	return (
		<div className="home">
			<Header></Header>
			<div className="go-down-btn_top" onClick={() => goToMidSection()}></div>
			
			<Cards />
			<div className="go-down-btn_mid" onClick={() => onGoDown()}></div>
			
			<Footer className="footer" />
			<div className="go-up-btn" onClick={() => onGoUp()}></div>


		</div>
	);
};

export default withRouter(Home);
