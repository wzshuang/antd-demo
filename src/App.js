import React, { Component } from 'react';
import logo from './logo.svg';
import WrappedLoginForm from './Login.js';
import Home from './Home.js';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import './App.css';

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Route exact path="/" component={WrappedLoginForm}/>
					<Route path="/home" component={Home}/>
				</div>
			</Router>
    );
  }
}

export default App;
