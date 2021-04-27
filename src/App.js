import React, { useEffect } from 'react';
import './App.css';
import Home from './components/home/home';
import { Router, Route, Switch } from "react-router-dom";
import MyProfile from './components/me/me';
import history from './shared/history';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(fab);
library.add(fas);
library.add(far);

function App() {

	const [red, green, blue] = [69, 111, 225];

	useEffect(() => {
		window.addEventListener('scroll', () => {
			const h = document.documentElement;
			const body = document.body;
			const st = 'scrollTop';
			const sh = 'scrollHeight';
			const percent = ((h[st]||body[st]) / ((h[sh]||body[sh]) - h.clientHeight) * 100) + 50;
			const overlayHead = document.querySelector(".header div[class^='overlay-'");
			const overlayFoot = document.querySelector(".home div[class^='footer-overlay'");			
			const y = 1 + (window.scrollY || window.pageYOffset) / 150;
			const [r, g, b] = [red/y, green/y, blue/y].map(Math.round);
			overlayHead.style.backgroundColor = `rgb(${r}, ${g}, ${b}, ${percent}%)`;
			const footTransparencyPercent = (100 - percent) + 80;
			overlayFoot.style.backgroundColor = `rgb(${r}, ${g}, ${b}, ${footTransparencyPercent}%)`;
		});
	});

	return (
		<div className="App" >
			<Router history={history}>

				<Switch>
					<Route exact path="/" component={Home}/>
					<Route path="/me" component={MyProfile} />
				</Switch>

			</Router>
		</div>
	);
}

export default App;
