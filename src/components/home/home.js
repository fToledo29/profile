import React from 'react'
import { withRouter } from 'react-router-dom';
import Cards from '../cards/cards'
import { Footer } from '../footer/footer'
import Header from '../header/header'

const Home = () => {
	return (
		<div className="home">
			<Header></Header>

			<Cards />

			<Footer />
		</div>
	);
};

export default withRouter(Home);
