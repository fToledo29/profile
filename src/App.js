import React from 'react';
import './App.css';
import Home from './components/home/home';
import { Router, Route, Switch } from "react-router-dom";
import MyProfile from './components/me/me';
import history from './shared/history';

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
