import React from 'react';
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
  return (
    <div className="App">
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
