import React, { Component } from 'react';
import WrappedLoginForm from './Login';
import Home from './Home';
import ItemAdd from './ItemAdd';

import {
  HashRouter as Router,
  Route
} from 'react-router-dom';

import './App.css';

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Route exact path="/" component={WrappedLoginForm} />
					<Route path="/home" component={Home} />
					<Route path="/itemAdd" component={ItemAdd} />
				</div>
			</Router>
    );
  }
}

export default App;
