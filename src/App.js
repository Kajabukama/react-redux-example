import React, { Component } from 'react';
import { Provider } from 'react-redux';

import './App.css';

import Posts from './Components/Post/Post';
import PostForm from './Components/Post/PostForm';

import Store from './store';

class App extends Component {

	render() {
		return (
			<Provider store={Store}>
				<div className="container">
					<div className="row">
						<div className="col-md-4">
							<PostForm />
						</div>
						<div className="col-md-8">
							<Posts />
						</div>
					</div>
				</div>
			</Provider>
		);
	}
}

export default App;
