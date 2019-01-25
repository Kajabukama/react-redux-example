import { FETCH_POSTS, CREATE_POST } from './types';

export const fetchPost = () => dispatch => {
	fetch('https://jsonplaceholder.typicode.com/posts')
		.then(response => response.json())
		.then(posts => dispatch({
			type: FETCH_POSTS,
			payload: posts
		}))
}

export const createPost = (postData) => dispatch => {
	console.log('creating a posts ....')

	fetch('https://jsonplaceholder.typicode.com/posts', {
		method: 'POST',
		headers: { 'content-type': 'application/json' },
		body: JSON.stringify(postData)
	})
		.then(response => response.json())
		.then(post => {
			console.log(post);
			dispatch({ type: CREATE_POST, payload: post})
		});
}