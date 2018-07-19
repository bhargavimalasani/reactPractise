import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
//import {Router, Route} from 'react-router';


import BasicRouting from './components/routing.js';
import DashBoard from './components/dashBoard.js';
//import SearchBar from './components/searchBar.js';
import Login from './components/login.js'

const App = () => {
	return (
		<Router>
			<div>
				<Route path="/" component={Login}/>
				<Route path="/dashBoard" component={DashBoard}/>
			</div>
		< /Router>
		
		)	
}


ReactDOM.render(<App />, document.querySelector('.container'))
